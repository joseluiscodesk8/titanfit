# GitOps and Kubernetes

At Pukara, we use [ArgoCD](https://argo-cd.readthedocs.io/en/stable/) for GitOps and Kubernetes as the foundation of our infrastructure. Most of our services are deployed in our Kubernetes clusters, others are in Virtual Machines (Scaleway and Hetzner) and we also use shared-hosting (Siteground).

Two of our main clusters are:

- `scaleway-k8s`, hosted on Scaleway.
- `mk8s`, using MicroK8s and hosted on Hetzner (3 virtual machines managed with Proxmox).

All credentials (_kubeconfig_ files) needed to access the clusters can be found in 1Password (_[Platform] Pukara_ vault). You can view and manage all services via [ArgoCD](https://argocd-internal.pukara.dev), which is connected to both clusters.

## ArgoCD - GitOps

We use ArgoCD to implement GitOps. GitOps is important because it allows us to manage infrastructure and application configurations through Git repositories, ensuring consistency, version control, and automation in deployment processes.

## Adding new repository in ArgoCD

We follow strict security practices ([Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)) and avoid using broad-access tokens. As a result, ArgoCD does not have automatic access to all repositories. To give ArgoCD access to a new repository, follow these steps:

1. Add the repository as an ArgoCD secret: This is the standard way to configure repository access in ArgoCD (as specified [here](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#repositories)). We manage this using Terraform, specifically in the section where we configure repositories ([link to Terraform setup](https://github.com/pukara-dev/infrastructure/blob/main/modules/kubernetes-components/main.tf#L64-L86)). You only need to add your repository, and it will be automatically registered in ArgoCD (you can verify that the secret is created).

2. Contact Alejandro: After the repository is added, contact Alejandro to grant the token used in the repository access to the specific repository. This involves setting up the required permissions (RBAC) directly in GitHub for that token.

## Kubernetes

### Expose a service to the internet with Tailscale

We use [Tailnet](https://tailscale.com/) as our VPN provider (you should use it personally too). It’s great because it allows us to share services both privately and publicly with SSL ([Funnel](https://tailscale.com/kb/1223/funnel)). Tailscale is extremely useful for ephemeral environments/URLs and we has an operator running in every cluster.

To expose a service to the internet, we only need to add an ingress within the cluster, and the Tailscale operator will handle publishing the service and adding SSL. The ingress manifest should look like the following example we use to expose:

```yaml
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    tailscale.com/funnel: 'true'       # Important if you want to expose to the internet
  name: service-ingress-example
spec:
  defaultBackend:
    service:
      name: mk8s-kubescape-middleware
      port:
        number: 8080
  ingressClassName: tailscale
  tls:
    - hosts:
        - mk8s-security-middleware    # This is important, define the hostname: mk8s-security-middleware.bonito-stonecat.ts.net

```

This will create a public-facing service under the name https://**mk8s-security-middleware**.bonito-stonecat.ts.net. The _bonito-stonecat.ts.net_ domain comes from Tailnet and **cannot be changed**. If you require a _pukara.dev_ domain, take the Cloudflare route.

### Expose a service to the internet with Cloudflare

We use [Cloudflare tunnels](https://www.cloudflare.com/en-gb/products/tunnel/) to expose `*.pukara.dev` domains (they also provide us WAF), with each cluster having its own Cloudflare tunnel proxy (with different IDs). To expose a service to the internet through Cloudflare, we must follow two steps:

1. Add the DNS name in the infrastructure repository under the Cloudflare folder. [Here](https://github.com/pukara-dev/infrastructure/blob/main/cloudflare/main.tf)
2. Add the domain endpoint in the Cloudflare tunnel running within the cluster where your service is deployed. Look for the Helm Chart in the GitOps repository and add it there (see [here](https://github.com/pukara-dev/gitops/blob/main/environments/hetzner-pve-microk8s/argocd-apps/cloudflared-tunnel.yaml#L22-L32) and [here](https://github.com/pukara-dev/gitops/blob/main/environments/scaleway-prd/argocd-apps/cloudflared-tunnel.yaml#L22-L37)).

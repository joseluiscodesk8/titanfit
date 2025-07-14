# Kubernetes components

This is the module offers some form of pre-architected Kubernetes components that every cluster should have: ArgoCD with exposed domain, etc

## Documentation

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 0.13 |
| <a name="requirement_helm"></a> [helm](#requirement\_helm) | 2.17.0 |
| <a name="requirement_kubernetes"></a> [kubernetes](#requirement\_kubernetes) | 2.36.0 |
| <a name="requirement_onepassword"></a> [onepassword](#requirement\_onepassword) | 2.1.2 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_helm"></a> [helm](#provider\_helm) | 2.17.0 |
| <a name="provider_kubernetes"></a> [kubernetes](#provider\_kubernetes) | 2.36.0 |
| <a name="provider_onepassword"></a> [onepassword](#provider\_onepassword) | 2.1.2 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [helm_release.argocd](https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs/resources/release) | resource |
| [kubernetes_cluster_role.read_only_sa](https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role) | resource |
| [kubernetes_cluster_role_binding.read_only_sa](https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role_binding) | resource |
| [kubernetes_manifest.argocd_root](https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/manifest) | resource |
| [kubernetes_namespace.argocd](https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/namespace) | resource |
| [kubernetes_namespace.one_password](https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/namespace) | resource |
| [kubernetes_secret.argocd_repos](https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/secret) | resource |
| [kubernetes_secret.one_password_credentials](https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/secret) | resource |
| [kubernetes_secret.one_password_token](https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/secret) | resource |
| [kubernetes_secret.read_only_sa](https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/secret) | resource |
| [kubernetes_service_account.read_only_sa](https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/service_account) | resource |
| [onepassword_item.github_argocd_oauth_client_secret](https://registry.terraform.io/providers/1Password/onepassword/2.1.2/docs/data-sources/item) | data source |
| [onepassword_item.github_pat](https://registry.terraform.io/providers/1Password/onepassword/2.1.2/docs/data-sources/item) | data source |
| [onepassword_item.one_password_access_token](https://registry.terraform.io/providers/1Password/onepassword/2.1.2/docs/data-sources/item) | data source |
| [onepassword_item.one_password_credentials_file](https://registry.terraform.io/providers/1Password/onepassword/2.1.2/docs/data-sources/item) | data source |
| [onepassword_vault.platform_automation](https://registry.terraform.io/providers/1Password/onepassword/2.1.2/docs/data-sources/vault) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_create_read_only_service_account"></a> [create\_read\_only\_service\_account](#input\_create\_read\_only\_service\_account) | To create a read only service account inside the cluster for services like Backstage | `bool` | `true` | no |

## Outputs

No outputs.
<!-- END_TF_DOCS -->

# navigator-platform

This repository contains the Terraform configurations and modules necessary to manage our organization's infrastructure on AWS, GCP, etc.

# Atlantis Infrastructure Automation

## Overview

[Atlantis](https://www.runatlantis.io/) is a self-hosted application used for automating Terraform execution via pull requests in version control systems such as GitHub, GitLab, and Bitbucket. It provides a unified workflow for team collaboration on infrastructure as code (IaC).

## How Atlantis Works

Atlantis listens for Terraform project changes through webhooks in version control systems. When changes are detected in a pull request, Atlantis:

1. Runs `terraform plan` to show the potential changes.
2. Comments the output back to the pull request for review.
3. Allows users to remotely run `terraform apply` via pull request comments after review.

## Deployment with ArgoCD

We have deployed Atlantis in our Kubernetes cluster using ArgoCD, which enables GitOps-style management of the Atlantis application itself. The deployment includes:

- **Atlantis Server**: The main Atlantis application running in a Kubernetes Deployment.
- **Webhooks**: Configured in our GitHub repositories to notify Atlantis of pull request events.
- **HTTPS Security**: Atlantis is exposed via an HTTPS endpoint, secured with a valid SSL certificate.
- **Authentication**: Access to the Atlantis UI is secured with basic authentication (username and password).

### ArgoCD Setup

- **Application Definition**: ArgoCD monitors the `atlantis` application definition within our [infrastructure git repository].
- **Sync Policy**: The ArgoCD application is configured with an automatic sync policy to ensure the live state matches the desired state committed in the repository.

## Repositories Configuration

Atlantis is configured to manage multiple repositories:

- [cloud-platform](https://github.com/Trocdigital/cloud-platform)
- [navigator-platform](https://github.com/MobileInsight/navigator-platform)

Each repository contains an `atlantis.yaml` file specifying the workflow for managing Terraform plans and applies.

## Security

- **Webhooks**: Utilize a secret to ensure that only GitHub can trigger the Atlantis workflow.
- **HTTPS**: All traffic to Atlantis is encrypted using SSL, ensuring that sensitive data is transmitted securely.
- **Credentials**: Atlantis uses GCP service account keys, which are securely managed and rotated as per the organization's security policy.

## Usage

To use Atlantis in our GitHub repositories:

1. Open a pull request with Terraform changes.
2. Atlantis automatically posts the plan as a comment.
3. To apply the changes, comment `atlantis apply` on the pull request.

Review the `atlantis.yaml` file in the repository root for project-specific configurations.

## Best Practices

- **Review Plans**: Always review `terraform plan` output before applying.
- **Secure Secrets**: Never commit secrets directly to the repository. Use secret management systems. That is why we are encrypting our secrets with Sealed Secrets.
- **Monitor and Audit**: Regularly check Atlantis logs and actions for any unauthorized access or actions.

## Troubleshooting

If you encounter issues with Atlantis:

- Check the ArgoCD dashboard for the sync status of the Atlantis application.
- Review the Atlantis pod logs for any errors or issues with Terraform commands.
- Ensure webhooks are correctly configured and firing on pull request events.

For more assistance, contact the DevOps team at Pukara or consult the [Atlantis documentation](https://www.runatlantis.io/docs/).%                                                                                                                    
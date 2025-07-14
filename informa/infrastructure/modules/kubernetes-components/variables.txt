# variables.tf
variable "argocd_github_client_id" {
  description = "GitHub OAuth Client ID para ArgoCD"
  type        = string
  sensitive   = true
}

variable "argocd_github_client_secret" {
  description = "GitHub OAuth Client Secret para ArgoCD"
  type        = string
  sensitive   = true
}
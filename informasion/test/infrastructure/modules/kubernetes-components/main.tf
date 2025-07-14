resource "kubernetes_namespace" "argocd" {
  metadata {
    name = "argocd"
  }
}

resource "helm_release" "argocd" {
  name       = "argocd"
  namespace  = kubernetes_namespace.argocd.metadata[0].name
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argo-cd"
  version    = "8.1.0" # Usa la última versión estable

   values = [templatefile("${path.module}/resources/argocd-values.yaml", {
    github_client_id     = var.argocd_github_client_id,
    github_client_secret = var.argocd_github_client_secret
  })]
  depends_on = [kubernetes_namespace.argocd]

}

resource "kubernetes_manifest" "argocd_root" {
  field_manager {
    force_conflicts = true
  }

  manifest = yamldecode(templatefile(
    "${path.module}/resources/argocd-root-app.yaml", {}
  ))

  depends_on = [
    helm_release.argocd,
  ]
}

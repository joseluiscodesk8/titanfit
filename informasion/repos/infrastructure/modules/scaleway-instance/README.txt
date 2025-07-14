# Scaleway Instances

This is the module offers some form of pre-architected and supported approaches to create scaleway instances in Pukara

## Documentation

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 0.13 |
| <a name="requirement_scaleway"></a> [scaleway](#requirement\_scaleway) | 2.50.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_scaleway"></a> [scaleway](#provider\_scaleway) | 2.50.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [scaleway_instance_ip.public_ip](https://registry.terraform.io/providers/scaleway/scaleway/2.50.0/docs/resources/instance_ip) | resource |
| [scaleway_instance_security_group.default](https://registry.terraform.io/providers/scaleway/scaleway/2.50.0/docs/resources/instance_security_group) | resource |
| [scaleway_instance_server.server](https://registry.terraform.io/providers/scaleway/scaleway/2.50.0/docs/resources/instance_server) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_instance_name"></a> [instance\_name](#input\_instance\_name) | n/a | `string` | n/a | yes |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | n/a | `string` | `"DEV1-S"` | no |
| <a name="input_packages"></a> [packages](#input\_packages) | n/a | `list(string)` | `[]` | no |
| <a name="input_project_id"></a> [project\_id](#input\_project\_id) | n/a | `string` | `"bf440c88-ed78-4a43-95bc-22a958cc4eca"` | no |
| <a name="input_public_ip"></a> [public\_ip](#input\_public\_ip) | n/a | `bool` | `true` | no |
| <a name="input_routed_ip_enabled"></a> [routed\_ip\_enabled](#input\_routed\_ip\_enabled) | n/a | `bool` | `false` | no |
| <a name="input_sg_ingress_ports"></a> [sg\_ingress\_ports](#input\_sg\_ingress\_ports) | n/a | `map(string)` | <pre>{<br/>  "22": "0.0.0.0/0"<br/>}</pre> | no |
| <a name="input_ssh_keys"></a> [ssh\_keys](#input\_ssh\_keys) | n/a | `list(string)` | <pre>[<br/>  "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIC90w9KIPh9pCh53Ys6D55li+7Rho6GpTC/kHiktGwMa hi@mogaal.com"<br/>]</pre> | no |
| <a name="input_state"></a> [state](#input\_state) | n/a | `string` | `"started"` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | n/a | `list(string)` | n/a | yes |

## Outputs

No outputs.
<!-- END_TF_DOCS -->

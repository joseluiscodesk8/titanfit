# Hetzner Instances

This is the module offers some form of pre-architected and supported approaches to create hetzner instances in Pukara

## Documentation

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 0.13 |
| <a name="requirement_hetzner"></a> [hetzner](#requirement\_hetzner) | 1.50.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_hetzner"></a> [hetzner](#provider\_hetzner) | 1.50.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [hcloud_firewall.default](https://registry.terraform.io/providers/hetznercloud/hcloud/1.50.0/docs/resources/firewall) | resource |
| [hcloud_server.server](https://registry.terraform.io/providers/hetznercloud/hcloud/1.50.0/docs/resources/server) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_network_name"></a> [network\_name](#input\_network\_name) | Private network name | `string` | n/a | yes |
| <a name="input_instance_name"></a> [instance\_name](#input\_instance\_name) | Instance name | `string` | n/a | yes |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | Instance type | `string` | `"ccx13"` | no |
| <a name="input_instance_image"></a> [instance\_image](#input\_instance\_image) | Instance image | `string` | `"ubuntu-20.04"` | no |
| <a name="input_instance_location"></a> [instance\_location](#input\_instance\_location) | Instance location | `string` | `"nbg1"` | no |
| <a name="input_rules"></a> [instance\_rules](#input\_rules) | Firewall rules | `list(object)` | `[{ direction = 'in', protocol = 'tcp', port = "22", source_ips = ["0.0.0.0/0"] }]` | no |
| <a name="input_packages"></a> [packages](#input\_packages) | List of packages to install on instance creation | `list(string)` | `[]` | no |
| <a name="input_ssh_keys"></a> [ssh\_keys](#input\_ssh\_keys) | SSH keys (key value pair where key is the ssh key name and value is the ssh key public key, if not provided it will fetch all the ssh keys from Hetzner) | `map(string)` | `null` | no |
| <a name="input_labels"></a> [labels](#input\_labels) | Labels | `map(string)` | `{}` | no |
| <a name="input_create"></a> [create](#input\_create) | Whether it should create the instance or not | `bool` | `true` | no |

## Outputs

No outputs.
<!-- END_TF_DOCS -->

#🛠️ Guía para Documentar en Backstage con TechDocs.

📁 Sección 1: Modo Simple (documentación mínima)
Si solo necesitas una documentación básica en Backstage:

✅ Requisitos mínimos
Crear una carpeta docs/ en la raíz del repositorio.

Agregar un archivo index.md dentro de esa carpeta.

mi-servicio/

├── docs/

│   └── index.md

└── catalog-info.yaml

✅ Contenido de index.md

# Documentación de Mi Servicio

Bienvenido. Aquí puedes documentar cómo funciona tu servicio.

✅ Añadir anotación en catalog-info.yaml

apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: mi-servicio
  annotations:
    backstage.io/techdocs-ref: dir:.


📌 ¿Qué significa esta anotación?

backstage.io/techdocs-ref: dir:.
👉 Significa que buscará una carpeta llamada docs/ en la raíz del repositorio.

backstage.io/techdocs-ref: dir:docs
👉 Buscará la documentación dentro de una ruta como docs/docs, 

🔴 Importante:

TechDocs solo admite estructuras donde la carpeta principal sea docs/.
Si colocas los archivos en otra ruta (por ejemplo, mi-docs/index.md), no funcionará.

#⚙️ Sección 2: Modo Avanzado con mkdocs.yml

Para tener navegación personalizada, más páginas y mayor control:

✅ Estructura recomendada

mi-servicio/

├── docs/

│   ├── index.md

│   ├── arquitectura.md

│   └── uso.md

├── mkdocs.yml

└── catalog-info.yaml


✅ Contenido de mkdocs.yml

site_name: Documentación de Mi Servicio
nav:
  - Inicio: index.md
  - Arquitectura: arquitectura.md
  - Guía de Uso: uso.md
plugins:
  - techdocs-core

#Este archivo debe estar en la raíz del repositorio (no dentro de docs/).
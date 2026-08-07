# D Creations — Mapa inicial del catálogo Shopify

Fecha de auditoría: 7 de agosto de 2026.

## Enlaces confirmados para la portada

| Botón | Producto Shopify | Ruta |
| --- | --- | --- |
| Labels | Labels Personalizados | `/products/labels-personalizados` |
| NFC Keychains | NFC Keychain 3D Personalizado | `/products/nfc-keychain-3d-personalizado` |
| QR Codes | QR Code Impreso Personalizado | `/products/qr-code-impreso-personalizado` |
| 3D Tags | Label de Nombre 3D Personalizado con Diseño | `/products/label-de-nombre-3d-personalizado-con-diseno` |
| Stickers | Sticker para Tumbler | `/products/sticker-para-tumbler` |

## Productos activos observados

- Labels Small
- QR Code Impreso Personalizado
- NFC Keychain 3D Personalizado
- Labels Personalizados
- Bundle Escolar 69
- Bundle Escolar 45
- 10 Labels Grandes
- 8 Franjas
- Cartuchera Personalizada Impresa en 3D
- Póster Personalizado en Vinyl
- Forro de Libro Personalizado en Vinyl — Full Cover
- Label de Nombre 3D Personalizado con Diseño
- Sticker para Tumbler
- Franjas para Libretas
- Labels Mini
- Labels Medium
- Labels Large

## Productos de QA

- `QA — Bundle (No vender)`: archivado.
- `QA — Personalización (No vender)`: archivado.

No reactivar ni publicar estos productos.

## Hallazgos que requieren corrección o decisión

- La portada aprobada muestra kits Ready $29, Plus $44 y Complete $64.
- El catálogo actual contiene `Bundle Escolar 45` y `Bundle Escolar 69`, pero no se confirmó un producto correspondiente a Ready $29.
- No se conectarán los botones de los kits hasta que el propietario confirme si los precios visuales ($29/$44/$64) son definitivos o si deben ajustarse al catálogo existente.
- `Labels Personalizados` usa actualmente la plantilla `personalized-upload` del tema antiguo.
- El producto tiene opciones de tamaño y acabado; las filas observadas mostraban disponibilidad cero en la ubicación. Debe probarse la disponibilidad real en storefront antes del lanzamiento.
- Algunos productos tienen `Inventory not tracked`; debe definirse si se venderán sin límite o con capacidad diaria/semanal.
- Deben revisarse precios por variante, imágenes, SKUs, pesos y tiempos de producción antes de habilitar checkout real.

## Plantilla nueva

El tema nuevo incluye `product.dcreations-personalized.json`, que captura:

- Título o tema del diseño.
- Nombre.
- Grado o información corta.
- Descripción del diseño.
- Imagen de referencia JPG, PNG o WEBP.
- Información adicional.

La plantilla debe asignarse solamente después de cargar el tema de prueba y validar que todas las propiedades aparecen en carrito y pedido.


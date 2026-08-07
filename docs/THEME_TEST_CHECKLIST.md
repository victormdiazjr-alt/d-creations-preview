# D Creations — Lista de pruebas del tema Shopify

## Antes de publicar

- Mantener la tienda protegida por contraseña.
- Subir el tema como borrador y confirmar que el tema publicado no cambia.
- Confirmar los enlaces ya mapeados de Labels, NFC, QR, 3D Tags y Stickers.
- Asignar enlaces reales a los tres kits solamente después de conciliar sus nombres, composiciones y precios con el catálogo. Mientras estén sin asignar, muestran “Disponible pronto” y no envían al cliente a un producto incorrecto.
- Asignar la plantilla `dcreations-personalized` a los productos que requieren información personalizada.
- Activar “Requerir imagen de referencia” solamente en productos que no puedan producirse sin una imagen.

## Portada

- Confirmar los tres slides en escritorio y móvil.
- Probar flechas, indicadores y rotación automática.
- Confirmar que `prefers-reduced-motion` elimina la animación.
- Verificar los cinco botones de producto en una fila de escritorio y el acomodo móvil.
- Confirmar que 3D Prints continúa oculto.
- Verificar los precios y contenidos de Ready, Plus y Complete contra los productos reales.

## Producto personalizado

- Probar producto con una sola variante y con varias variantes.
- Verificar campos requeridos: título/tema y nombre.
- Verificar grado, descripción e información adicional.
- Probar JPG, PNG y WEBP como imagen de referencia.
- Confirmar que la imagen y las propiedades aparecen en carrito, pedido y notificación al equipo.
- Confirmar que no se puede añadir una variante agotada.
- Probar nombres con tildes, ñ, apóstrofos y guiones.
- Probar límites de caracteres y errores de formulario en móvil.

## Carrito y checkout

- Confirmar producto, variante, cantidad, precio y todas las propiedades.
- Verificar que las propiedades se mantienen al abrir y actualizar el carrito.
- Probar código de descuento válido e inválido.
- Confirmar tarifas para Puerto Rico y un estado continental.
- Confirmar que no aparezca envío gratis; el propietario lo rechazó y la tarifa fue eliminada el 7 de agosto de 2026.
- Confirmar que no se cobra impuesto hasta recibir la decisión contributiva.

## Notificaciones

- Pedido creado al cliente.
- Nuevo pedido al equipo.
- Pedido cancelado.
- Pedido reembolsado.
- Pedido preparado/enviado con rastreo.
- Entrega a `info@dcreationspr.com` y ausencia de advertencias SPF/DKIM/DMARC.

## Pagos

- Usar modo de prueba o Bogus Gateway primero.
- Probar pago aprobado, rechazado y abandonado.
- No activar pagos reales hasta completar identidad, dos pasos y cuenta bancaria.
- Ejecutar una compra real de bajo valor y reembolsarla antes de quitar la contraseña.

## Dispositivos

- Escritorio: Chrome y Safari.
- Teléfono: iPhone/Safari y Android/Chrome.
- Tableta en orientación vertical y horizontal.
- Navegación con teclado y lector de pantalla básico.

## Gate final

- Tema correcto publicado.
- Dominio primario y SSL conectados.
- Correo autenticado con SPF, DKIM y DMARC verificados.
- Políticas aprobadas y visibles.
- Pagos, impuestos, envíos y contacto confirmados.
- Cero enlaces o recursos rotos.
- Contraseña retirada únicamente con aprobación del propietario.

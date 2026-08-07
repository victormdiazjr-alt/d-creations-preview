# D Creations — Auditoría de lanzamiento

Fecha: 7 de agosto de 2026 (AST)

## Resumen ejecutivo

La tienda tiene dominio, correo, catálogo y una configuración básica de envío. No está lista para aceptar pedidos reales porque Shopify Payments no está activado, faltan políticas esenciales y el tema publicado es anterior a la versión visual aprobada del 29 de julio.

La tienda debe permanecer protegida por contraseña hasta completar el tema Shopify, la configuración fiscal y financiera, y las pruebas de compra.

## Shopify

### Confirmado

- Tienda: D Creations.
- Dominio principal: `dcreationspr.com`.
- Dominios conectados: `dcreationspr.com`, `www.dcreationspr.com`, `f1w0ga-jy.myshopify.com` y `d-creations-3d.myshopify.com`.
- Verificación HTTPS: `dcreationspr.com` responde con Shopify y redirige a la página protegida; `www.dcreationspr.com` redirige canónicamente a `https://dcreationspr.com/`.
- SSL/HSTS activos en el dominio público.
- Moneda: USD.
- Zona horaria: Puerto Rico (GMT-04:00).
- Sistema de medidas: imperial; peso predeterminado en libras.
- Correo y teléfono de contacto: `info@dcreationspr.com` y `7872225712`.
- Ubicación de cumplimiento: Portal de los Pinos, San Juan, Puerto Rico 00926.
- Los productos físicos no se marcan automáticamente como cumplidos.
- Los pedidos terminados se archivan automáticamente.
- Mercado activo: Estados Unidos, que incluye Puerto Rico.
- La tienda continúa protegida por contraseña.
- Nombre legal confirmado por el propietario: `Dcreations, LLC`.
- Dirección autorizada para publicación: `San Juan, Puerto Rico` (sin dirección residencial completa).

### Tema

- Tema publicado: `D Creations - Dev v1`, guardado el 15 de julio, Horizon 4.1.0.
- Tema borrador: `D Creations - Dev v2`, guardado el 22 de julio, Horizon 4.1.0.
- La versión visual aprobada del 29 de julio existe solamente como build estático recuperado.
- El tema Shopify OS 2.0 ya reproduce la portada, el configurador personalizado, el encabezado, el pie y las páginas de Sobre nosotros, Servicios y Contacto.
- Validación oficial: Shopify Theme Check inspeccionó 335 archivos sin encontrar infracciones.
- El propietario autorizó subir el paquete como tema borrador el 7 de agosto de 2026. La publicación continúa prohibida hasta la aprobación final.

### Pagos

- Shopify Payments no está configurado.
- Shopify exige autenticación de dos pasos antes de añadir una cuenta bancaria.
- La entidad comercial aparece como `My Store - entity`; debe sustituirse por `Dcreations, LLC` durante la incorporación financiera.
- Falta completar la incorporación financiera con datos del propietario y la cuenta de desembolso.
- No activar pagos reales hasta completar pedidos de prueba.
- La cuenta ofrece Shopify Payments con Shop Pay y tarjetas; el panel muestra tarifas desde 2.5% + $0.30 y exige primero completar la dirección comercial predeterminada.
- El método de captura actual aparece como captura automática al realizarse el pedido. Debe verificarse nuevamente después de activar Shopify Payments.

### Envíos

- Perfil general aplicado a todos los productos.
- Zona doméstica: Estados Unidos.
- La tarifa Economy gratis para pedidos de $50 o más fue eliminada y el perfil mostró `Profile updated` el 7 de agosto de 2026, siguiendo la decisión expresa del propietario.
- Economy: $4.90 para 0–5 lb y $19.90 para 5–70 lb.
- Standard: $6.90 para 0–1 lb y $9.90 para 1–5 lb.
- Existe una zona internacional con tarifas calculadas de DHL/USPS, pero no está incluida en un mercado activo.
- Recogido local: apagado.
- Entrega local: apagada. El propietario desea ofrecerla en áreas cercanas; falta definir radio o códigos postales, pedido mínimo, cargo y horario.
- Tiempo de producción aprobado: 5–7 días laborables.
- Acción requerida: registrar pesos y empaques reales y calcular tarifas antes de sustituir las actuales.
- El único empaque configurado es `Sample box`, 8.6 × 5.4 × 1.6 pulgadas, con peso 0 lb. No debe usarse como base definitiva de tarifas calculadas.

### Impuestos

- Shopify Tax aparece activo como servicio.
- Estados Unidos aparece como `Not collecting`.
- El propietario confirmó que Dcreations, LLC todavía no tiene registro de comerciante de Puerto Rico.
- No se debe activar una obligación o tasa contributiva sin confirmar el registro y tratamiento de IVU con el propietario o su profesional contributivo.

### Políticas

- Política de privacidad: activada y automatizada.
- Devoluciones y reembolsos: sin política.
- Términos de servicio: sin política.
- Política de envío: sin política.
- Información de contacto legal: requerida.
- Reglas de devolución y cancelación: no configuradas.
- El propietario aprobó: 5–7 días laborables de producción, siete días para informar daños/errores y la exclusión de devoluciones para personalizados después de aprobar la prueba, excepto defecto o error de D Creations.

## Correo y dominio

### Google Workspace

- Usuario `info@dcreationspr.com`: activo.
- Nombre de la cuenta: D Creations.
- DKIM de Google Workspace: clave RSA de 2048 bits generada y autenticación iniciada el 7 de agosto de 2026.

### Shopify Email

- Correo remitente: `info@dcreationspr.com`.
- Autenticación de dominio: autenticada.
- Shopify indica que debe verificarse o añadirse un único registro DMARC válido.
- Estado inicial del 7 de agosto de 2026: no se publicaba SPF ni `_dmarc.dcreationspr.com`.
- Consulta DNS pública del 7 de agosto de 2026: el MX apunta a `smtp.google.com`.
- Registros añadidos el 7 de agosto de 2026 en Network Solutions:
  - `google._domainkey` con la clave DKIM generada por Google Workspace.
  - `@` con `v=spf1 include:_spf.google.com ~all`.
  - `_dmarc` con `v=DMARC1; p=none; rua=mailto:info@dcreationspr.com; adkim=r; aspf=r; pct=100`.
- Verificación posterior: SPF, DKIM y DMARC quedaron visibles en los servidores autoritativos de Network Solutions y en los resolvers públicos de Cloudflare (`1.1.1.1`), Google (`8.8.8.8`) y Quad9 (`9.9.9.9`).
- Acción futura: revisar los reportes recibidos en `info@dcreationspr.com` antes de endurecer DMARC más allá de `p=none`.

### Network Solutions

- Acceso administrativo confirmado para `dcreationspr.com`.
- El panel muestra una advertencia de que falta un método de pago en la cuenta.
- DNS web confirmado públicamente: el dominio raíz apunta a `23.227.38.65` y `www` apunta a `shops.myshopify.com`.
- Acción requerida del propietario: añadir un método de pago válido y confirmar renovación automática del dominio, sin compartir los datos financieros en el chat.

## Orden de cierre recomendado

1. Reconstruir la versión visual aprobada como tema Shopify de prueba.
2. Conectar productos, personalización, cargas de archivos, carrito y datos del pedido.
3. Confirmar políticas, tiempos de producción y tarifas de envío.
4. Verificar DMARC, MX, SPF/DKIM y entrega de correos.
5. Confirmar tratamiento de IVU con el profesional contributivo.
6. Activar autenticación de dos pasos y completar Shopify Payments con el propietario.
7. Ejecutar pedidos de prueba y una transacción real de bajo valor con reembolso.
8. Publicar el tema y quitar la contraseña solamente con aprobación final.

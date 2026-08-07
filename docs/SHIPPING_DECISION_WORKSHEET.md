# D Creations — Decisión de envío y entrega local

Estado: completar antes de cambiar las tarifas del checkout.

## Recomendación de lanzamiento

No usar envío gratis ni mantener tarifas genéricas sin comprobar. Para proteger el margen, la primera opción recomendada es cobrar tarifas calculadas por el transportista desde la ubicación de San Juan. Shopify calcula el precio usando destino, peso, dimensiones y servicio; por eso cada producto y el empaque predeterminado deben tener medidas reales.

Si la tarifa calculada disponible en el plan no cubre un servicio necesario, usar tarifas manuales por peso basadas en tres pedidos de prueba: uno liviano, uno mediano y uno grande, tanto para Puerto Rico como para Estados Unidos continental.

## Datos que hay que medir

Para cada tipo de producto:

- Peso del producto terminado.
- Peso y dimensiones del empaque usado para enviarlo.
- Si puede compartir empaque con otros artículos.
- Costo real de material de empaque.
- Servicio de transporte que se usará normalmente.

Shopify suma el peso de los artículos y el empaque para las tarifas basadas en peso. Sin estos datos no se puede demostrar que una tarifa cubre el costo real.

## Entrega local

Shopify permite delimitar entrega por radio o por códigos postales. Para D Creations se recomienda comenzar con **códigos postales**, porque evita que un radio incluya áreas difíciles o costosas de atender.

Completar antes de activarla:

- Códigos postales atendidos: __________
- Pedido mínimo: $__________
- Cargo de entrega: $__________
- Días y horario: __________
- Tiempo prometido después de producción: __________
- Instrucción al cliente: “Te contactaremos al teléfono de la orden para coordinar la entrega. Debe haber una persona disponible para recibirla.”

La entrega local funciona con Shop Pay, pero Shopify advierte que puede no aparecer si el cliente entra al checkout usando otros pagos acelerados como Apple Pay, Google Pay o PayPal. Hay que probar ese recorrido antes del lanzamiento.

## Pruebas obligatorias

1. Dirección elegible de San Juan: aparece Entrega local con el cargo correcto.
2. Dirección fuera del área: no aparece Entrega local.
3. Carrito por debajo del mínimo: no aparece Entrega local.
4. Carrito elegible: muestra también las opciones de envío aplicables sin duplicar cargos.
5. Pedido liviano, mediano y grande hacia Puerto Rico y Estados Unidos continental: la tarifa cubre etiqueta y empaque.

## Referencias oficiales

- Shopify: https://help.shopify.com/en/manual/fulfillment/setup/delivery-methods/local-delivery
- Shopify: https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates/setting-up-shipping-rates
- Shopify: https://help.shopify.com/en/manual/fulfillment/shopify-shipping/calculating-rates

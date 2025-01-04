# Recuperación de Datos HTTP en Angular
Este proyecto de Angular ilustra cuatro formas distintas de recuperar datos desde un endpoint HTTP:

**1. `subscribe()`**
El uso del método `subscribe()` es la forma más básica de trabajar con `HttpClient`. Es ideal para operaciones simples, pero requiere una gestión manual de la suscripción y desuscripción para evitar fugas de memoria.

**2. `AsyncPipe`**
`AsyncPipe` simplifica la suscripción y desuscripción automática en la plantilla, evitando la necesidad de suscribirse manualmente en el componente.

**3. `Signal`**
`Signal` permite la reactividad de manera más eficiente y declarativa. La conversión de un `Observable` a un `Signal` se realiza con `toSignal`.

**4. `Resource`**
`Resource` es la forma más moderna y recomendada para gestionar datos HTTP. Proporciona un manejo automático del estado de carga y error, además de ser altamente reactivo.

## Conclusión
Este proyecto demuestra cuatro enfoques distintos para recuperar datos HTTP en Angular. La elección del método adecuado depende de la complejidad del proyecto y las necesidades de reactividad y simplicidad de código. `Resource` es la opción más moderna y completa, mientras que `subscribe()` es el más básico y manual.
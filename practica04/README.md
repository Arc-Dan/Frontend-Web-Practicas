# Biblioteca





#### Preguntas y respuestas



1. **Express manda los rechazos de un handler async directo al middleware de errores, sin try/catch en cada ruta. ¿Qué tendrían que agregar en cada ruta si esto no fuera así?**
Para cada ruta se tendría que agregar un "try/catch" para especificar cada posible error y referenciar los módulos de errores para manejarlos en el "catch".

2. **¿Por qué el servicio no lanza directamente un 409 en vez de EjemplarPrestadoError?**
Por que el código 409 es parte del protocolo HTTP, mientras que el servicio sólo debe contener las reglas de negocio, de manera que no quede recluido únicamente para aplicaciones web.

3. **Si mañana agregaran una app móvil que también consume esta API, ¿qué archivos de esta práctica tendrían que tocar?**
Probablemente se tendrían que tocar todos los archivos que manejen protocolo HTTP o hagan referencia a elementos de HTML, como: "cliente.ts", "servidor.ts", "validar.ts" y "errores-http.ts".


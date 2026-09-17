# Gimnasio





#### Preguntas y respuestas



1. **¿Qué generó el comando: nest new?**
Generó toda la estructura del proyecto separada por capas, de manera que se puede comenzar a trabajar en él, sin preocuparse por crear manualmente los módulos desacoplados.

2. **¿Qué hace el AppService que ya viene generado?**
Declara una función "getHello" que retorna el texto "Hello World!", de manera que la misma pueda ser invocada desde el constructor del controlador cuando la ruta sea: "get".

3. **¿Por qué la ruta funciona sin declarar nada en app.module.ts?**
Porque ya se encontraba declarada la clase del controlador que utilizamos: "AppController"; además del proveedor: "AppService", al momento de generarse el proyecto con el comando: "nest new".

4. **¿Qué pasaría si el cuerpo de la petición viniera vacío?**
Se crearía un nuevo elemento para el arreglo de clases, con un ID, pues éste incrementará según el tamaño del arreglo, pero con un nombre vacío, pues no se especificó ninguna reestricción para agregar el nombre de las clases.

5. **¿En qué archivo vive hoy toda la lógica de la práctica?**
El archivo de "app.controller.ts" es donde vive la lógica de la quinta práctica, pues es donde se declara el arreglo de las clases, la implementación de las funciones según la ruta, además de la propia lógica del incremento en el ID de las nuevas clases.

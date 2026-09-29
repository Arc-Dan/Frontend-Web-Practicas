# Gimnasio


#### Preguntas y respuestas


1. **¿Qué pasaría si el módulo no quedara registrado en la raíz?**
Si el módulo no estuviera en la raíz, no se podría importar el módulo de las inscripciones, ni utilizar los controladores o los proveedores.

2. **¿Por qué los métodos del repositorio devuelven promesas si los datos van a estar en memoria?**
Para no tener que cambiar el código dentro del servicio si se requiere utilizar una base de datos real, de manera que a la estructura del servicio "le de igual" la fuente de los datos que recibe.

3. **¿Qué error apareció al cambiar a la interfaz, y por qué la clase sí se había resuelto sola?**
Sin el token, arroja el error de que no se puede resolver una dependencia, pues las interfaces de TypeScript desaparecen después de compilar el código; mientras que las clases sí "sobreviven" a la compilación, por lo que no arrojó ningún error.

4. **¿Por qué el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?**
Porque "InscripcionesService" es la clase que se utiliza en el controlador, por lo que su implementación sigue siendo válida después de la compilación; mientras que el servicio recibe una interfaz que se borrará después de compilarse, por lo que se necesita crear un token e inyectarlo en el constructor del servicio.

5. **¿Cuál es la diferencia entre un 400 y un 409?**
El código HTTP 400 se refiere a que la sintaxis de la petición no es la correcta; mientras que el 409 se refiere a que existe una especie de conflicto entre los datos que se pretende guardar en los campos.

6. **¿Por qué cambió el código de estado de esa última petición?**
Porque al cancelar la inscripción al horario, ésta cambió el valor del campo "estado" a "cancelada", por lo que quedó un espacio vacío para inscribir al miembro con ID: 3.
# Biblioteca





#### Preguntas y respuestas



1. **¿Hizo falta una base de datos real para probar la regla de negocio? ¿Qué dice eso sobre para qué sirve el patrón Repository?**
No hace falta, pues con el patrón "Repository" se pueden guardar los datos en memoria y probar las reglas de negocio de manera rápida desde ahí, sin necesidad de una base de datos real.

2. **El Service recibe el repositorio como Repository<Prestamo>, no InMemoryPrestamoRepository. ¿Qué se rompía si usaban la clase concreta?**
El archivo "Service" solo tiene las reglas de negocio y "no sabe" cuando se trabajan con datos guardados en memoria. Si se utiliza la clase concreta, los datos que tomaría tendrían que ser de una base de datos específica, por lo que se tendría que cambiar el código para acoplarse con la misma.

3. **Si cambiaran el Map en memoria por una base de datos real, ¿cuántos archivos tocarían? ¿Por qué tan pocos?**
Si se cambia el "Map" por una base de datos real, se tendrían que cambiar todos los archivos que importen la clase "InMemoryPrestamoRepository" para usarla. En este caso, sería sólo el archivo "main.ts", esto se debe a que las capas del patrón "Repository" sólo se conectan con la capa inferior a ellas, pues sigue el principio de bajo acoplamiento, por lo que los cambios que se realicen no deberían tocar muchos archivos.


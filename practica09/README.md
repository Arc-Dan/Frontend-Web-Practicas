# Gimnasio


#### Preguntas y respuestas


1. **¿Qué línea del Service o del Controller tuvo que cambiar para que Clases hablara con MySQL?**

Ninguna, sólo se importa PrismaModule y se pasa al módulo de la aplicación; mientras que para cada entidad, se especifica la clase en los "providers" de sus respectivos módulos.

2. **¿Por qué InscripcionesService no tuvo que cambiar ni una línea de las reglas de cupo y duplicados?**

Porque únicamente se cambiaron los repositorios en memoria por una base de datos real, a través de Prisma; mientras que a "InscripcionesService" sólo "le interesa" la lógica de negocio, no el lugar de almacenamiento de los datos.

3. **¿Por qué una interfaz no puede validar nada en tiempo de ejecución?**

Porque al compilarse el código fuente de TypeScript, las interfaces desaparecen, por lo que en tiempo de ejecución no pueden referenciarse.

4. **¿Qué código de estado responde y qué trae en el cuerpo?**

Al enviar un campo inexistente, responde con el código de estado 400. El cuerpo trae el código y el tipo de error: Bad Request, y el mensaje: "property hackeame should not exist".

5. **¿Cuántas líneas quedó más corto el controlador?**

Varias líneas debido a que ya no son necesarios los bloques "try/catch", pues ahora se hace desde el filtro de excepciones en "dominio.filter".

6. **Si la respuesta llega en los dos casos, ¿quién bloquea realmente y a quién protege?**

Aún cuando se devuelve una respuesta, el navegador es el que revisa y decide qué sitios tienen permisos de leer dicha respuesta, protegiendo al usuario al evitar que sitios no autorizados accedan a la sesión del mismo.
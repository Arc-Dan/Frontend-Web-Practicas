# Gimnasio


#### Preguntas y respuestas


1. **¿Por qué el paquete del adaptador se llama adapter-mariadb si usamos MySQL?**
Prisma utilizará el adaptador de MariaDB porque tiene protocolos similares a los de MySQL, pues MariaDB nació de un fork de MySQL, por lo que son compatibles en muchos aspectos.

2. **¿Editar schema.prisma cambió algo en la base de datos antes de migrar**
No, los cambios se aplican después migrar con el comando: "npx prisma migrate dev --name nombre".

3. **¿La carpeta de migraciones es una foto del esquema o un historial**
Es un historial que contiene los cambios realizados para cada migración, mismas cuyos nombres contienen la fecha y el nombre especificado al realizar dichas migraciones.

4. **¿Por qué Horario.clase sí crea columna y Clase.horarios no?**
Porque la tabla: "horarios" es la que posee el campo: "claseId" que guardará el ID de la clase a la cual se hace referencia en "clase" por medio de una relación.

5. **¿De dónde sale la relación de muchos a muchos entre Miembro y Horario, si nunca se declaró?**
De la tabla de "inscripciones", pues ésta liga a un miembro con un horario, pero a la vez permite tanto a "miembros" como "horarios" tener muchas inscripciones.
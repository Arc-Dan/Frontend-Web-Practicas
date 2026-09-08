# Multas



#### Preguntas y respuestas



#### Paso 2:

1. **¿Qué se espera que se imprima en consola?**
Si se tratara de la suma de dos variables de tipo "number" se podría asumir que imprimiría el valor de la suma de ambos; sin embargo, debido a que se trata de un texto con un número, el símbolo de adición aritmética se trata como una concatenación entre dos fragmentos de texto, por lo que se espera que imprima: 35050.
2. **¿Hubo algún error o advertencia en la consola?**
No hubo ningún error o advertencia en la consola, pues el lenguaje de JavaScript permite convertir y concatenar un número a un texto, por lo que no existe ningún error de sintaxis o en tiempo de ejecución, sino un error de lógica en el resultado esperado debido a cómo se encuentra estructurado el propio lenguaje.



#### Paso 3:

1. **Si el archivo tiene un error de tipos, ¿por qué Node lo ejecuta?**
Porque el tipado de la sintaxis de TypeScript existe al momento de la compilación y no durante el tiempo de ejecución del código fuente, pues éste último caso sería como ejecutarlo simplemente en JavaScript.
2. **¿Cuál comando revisa y cuál ejecuta?**
El comando que compila y revisa si hay errores, sin generar archivos, es: "npx tsc --noEmit"; mientras que el comando para ejecutar el archivo es: "node multas.ts".



#### Paso 4:

1. **De las dos líneas que usan const, ¿por qué sólo una falla?**
Al declararse una constante cargo: "const cargo = 100", se intentó reasignar el valor de dicha constante: "cargo = 50"; lo cual marcó un error, pues se estaba intentando cambiar el valor de una constante, misma que no puede cambiar su valor asignado desde otra línea de código diferente.
2. **Al asignarle un texto a la variable con let, nadie escribió que fuera un número. ¿De dónde salió ese tipo?**
Se declaró la variable: "let numero = 1", misma a la que se reasignó su valor como: "numero = 2", sin problema alguno; sin embargo, al asignarle el valor de un texto: "numero = 'dos'", marcó un error al tratar de asignar un "string" a una variable de tipo "number". Esto se debe a que al declarar la variable "numero", la misma se inicializó con un valor numérico, por lo que el propio lenguaje de TypeScript infirió automáticamente el tipo de dato para dicha variable como "number".



#### Paso 6:

1. **Primer error: Propiedad requerida en Préstamo**
Para provocar el primer error, se eliminó la propiedad: "ejemplar" del préstamo, la cual no es opcional, por lo que se esperaba que ocurriese un error, mismo cuya clave TS fue: ts2741, en la línea 26, col 7. Recibiendo el mensaje: Property 'ejemplar' is required in type 'Prestamo'.
2. **Segundo error: String asignado a propiedad 'estado'**
Para provocar el segundo error, se asigno el valor: "activo" a la propiedad: "estado" del préstamo, mismo que esperaba un objeto de tipo: "EstadoPrestamo". Su clave TS fue: ts2322, Ln 30, col 5. Mensaje recibido: Type 'string' is not asignable to type 'EstadoPrestamo'.
3. **Tercer error: Propiedad inexistente en Préstamo**
Para provocar el tercer error, se trató de imprimir en consola la propiedad de "Folio" de "Prestamo", el cual se esperaba que fuera "folio", por lo que arrojó un error. Su clave TS fue: 2551, Ln 35, col 22. Mensaje recibido: Property 'Folio' does not exist on type 'Prestamo'. Did you mean 'folio'?.




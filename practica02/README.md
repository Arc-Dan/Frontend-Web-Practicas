# Mostrador



#### Preguntas y respuestas



#### Paso 2:

1. **¿Por qué declarar el estado del préstamo como una unión de valores y no una enumeración?**
Para que al momento de compilar, los tres valores de tipo "string" permitidos para el estado del préstamo sigan siendo: activo, devuelto o vencido; pues serían los valores que se esperarían del JSON. Del otro modo, al compilarse como enumeración, se esperaría recibir los valores numéricos: 0, 1 o 2.



#### Paso 3:

1. **'¿Qué se gana con el tipo desconocido en lugar del que acepta todo?**
Porque si se utilizara el tipo "any" se compilaría el código fuente sin problemas y podría ocurrir la misma situación de JavaScript al recibir un tipo de dato no esperado desde una fuente externa y generar problemas posteriores. Mientras que al utilizar el tipo "unknown" se puede comprobar si el tipo de dato recibido es el correcto o no, y controlar el flujo del código según la situación.



#### Paso 4:

1. **¿Por qué la fecha entra como parámetro?**
Para poder probar con diferentes fechas de vencimiento, en lugar de sólo la fecha en la que se ejecuta el programa.


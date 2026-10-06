# Gimnasio API — Solución Práctica 8 (Prisma: esquema y migraciones)

Parte del código base de la semana y le agrega Prisma **solo como esquema y migraciones**. La
aplicación (Controllers, Services, repositorios en memoria) no se toca todavía — eso es la
Práctica 9. Esta práctica es puro mapeo: `schema.prisma` describe las 4 tablas, y cada
`prisma migrate dev` las crea/altera en MySQL.

## Cómo correrlo

```bash
npm install
cp .env.ejemplo .env        # y pon tu contraseña de root de MySQL
npm run prisma:migrate      # aplica el schema.prisma tal como quedó al final de la práctica
npx prisma studio           # para ver las tablas con datos (vacías: no hay seed todavía)
```

La app sigue corriendo igual que el código base (`npm run start:dev`), sirviendo desde los
repositorios en memoria — Prisma y la app todavía no se conocen.

## Qué se agregó respecto al código base

| Archivo | Qué es |
|---|---|
| `prisma/schema.prisma` | Las 4 tablas, sus relaciones, y `Clase.descripcion` (agregada en una segunda migración) |
| `prisma.config.ts` | Configuración del CLI de Prisma 7 |
| `.env.ejemplo` | La cadena de conexión |

`prisma/migrations/` no viene incluida: se genera en tu máquina al correr `prisma migrate dev`,
y por eso sí se sube al repositorio del alumno (a diferencia de `.env`).

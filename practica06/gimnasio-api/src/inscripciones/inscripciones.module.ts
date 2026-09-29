import { Module } from '@nestjs/common';
import { InscripcionesController } from './inscripciones.controller';
import { InscripcionesService } from './inscripciones.service';
import { InscripcionMemoriaRepository } from './infra/inscripcion-memoria.repository';
import { INSCRIPCION_REPOSITORY } from './inscripciones.tokens';

// nest g module inscripciones
/*
@Module({
  controllers: [InscripcionesController],
  providers: [InscripcionesService, InscripcionMemoriaRepository]
})
*/
@Module({
  controllers: [InscripcionesController],
  providers: [InscripcionesService, {
    provide: INSCRIPCION_REPOSITORY,
    useClass: InscripcionMemoriaRepository,
  }
],
})

export class InscripcionesModule {}

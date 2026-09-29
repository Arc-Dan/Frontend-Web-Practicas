import { Module } from '@nestjs/common';
import { ClasesController } from './clases.controller';
import { ClasesService } from './clases.service';

// nest g module clases
@Module({
  controllers: [ClasesController],
  providers: [ClasesService]
})
export class ClasesModule {}

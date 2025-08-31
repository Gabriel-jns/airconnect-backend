import { Module } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VuelosController } from './vuelos.controller';
import { AeropuertosModule } from 'src/aeropuertos/aeropuertos.module';

@Module({
  controllers: [VuelosController],
  providers: [VuelosService],
  imports: [AeropuertosModule],
})
export class VuelosModule {}

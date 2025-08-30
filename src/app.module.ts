import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AeropuertosModule } from './aeropuertos/aeropuertos.module';

@Module({
  imports: [AeropuertosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

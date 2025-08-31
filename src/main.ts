import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AeropuertosModule } from './aeropuertos/aeropuertos.module';
import { PasajerosModule } from './pasajeros/pasajeros.module';
import { VuelosModule } from './vuelos/vuelos.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API airconnect-backend')
    .setDescription('Esta api describe la plataforma de vuelos de Air Connect')
    .setVersion('1.0.0')
    .addTag('app-airconnect-api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const documentAeropuertos = SwaggerModule.createDocument(app, config, {
    include: [AeropuertosModule],
  });
  const documentPasajeros = SwaggerModule.createDocument(app, config, {
    include: [PasajerosModule],
  });
  const documentVuelos = SwaggerModule.createDocument(app, config, {
    include: [VuelosModule],
  });
  SwaggerModule.setup('api', app, document);
  SwaggerModule.setup('api/aeropuertos', app, documentAeropuertos);
  SwaggerModule.setup('api/pasajeros', app, documentPasajeros);
  SwaggerModule.setup('api/vuelos', app, documentVuelos);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurar CORS
  app.enableCors({
    origin: 'http://localhost:5173', // URL de tu aplicación React (ajusta según sea necesario)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  // Prefijo global para todas las rutas API
  app.setGlobalPrefix('api');
  
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL || '*', // O '*', solo para pruebas
    credentials: true, // si usas cookies o headers personalizados
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

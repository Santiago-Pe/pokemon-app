import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.APP_PORT || 3001;
  app.enableCors({
    origin: process.env.FRONT_URL,
  });
  await app.listen(port);
}
bootstrap();

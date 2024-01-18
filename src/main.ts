import { config } from 'dotenv';

config();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import AppModule from './services/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(process.env.APP_PORT);
}

bootstrap();

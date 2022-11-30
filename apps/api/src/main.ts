import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as session from 'express-session';
import { environment } from '../../tea/src/environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/';
  const apiUrl = environment.apiUrl;
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.enableCors();
  await app.listen(port);
  Logger.log(
    `🚀 Broken Leaf backend application is running on: ${apiUrl}`
  );
}


bootstrap();

import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

import fmp = require('fastify-multipart');

import { graphqlUploadExpress } from 'graphql-upload'


import { contentParser } from 'fastify-multer';
import { join } from 'path';



async function bootstrap() {
  const port = Number(process.env.PORT)

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  await app.listen(port, '0.0.0.0').then(() => {
    console.log(`http://localhost:${port}`)
  });
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimnia cualquier nformacion adicional en el request que no sea la solicitada en el dto
      forbidNonWhitelisted: true // valida que el request sea exacatmente el que se necesita segun el dto
    })
  )
  await app.listen(3000);
}
main();

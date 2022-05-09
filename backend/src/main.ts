import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //config Swagger
  const documentBuilder = new DocumentBuilder()
    .setTitle('Ecommerce Tech Tunnel')
    .setDescription('API Bootcamp Tech Tunnel AP')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('swagger', app, document);
  //config de segurança
  app.enableCors({ origin: '*' })
  await app.listen(3000);
}
bootstrap();

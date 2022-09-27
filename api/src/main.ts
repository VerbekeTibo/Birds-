import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port:number = +process.env.PORT || 3003
  await app.listen(3003);
  console.info(`👋 \n Welcome to the server. Visit http://localhOwOst:${port}`)
}
bootstrap();

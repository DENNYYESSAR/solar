import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap(){
  const app = await NestFactory.create(AppModule);
  app.use(cors({ origin: '*' }));
  
  // Enable shutdown hooks
  app.enableShutdownHooks();
  
  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`Application running on http://localhost:${port}`);
  console.log('API available at /contact');
}
bootstrap();

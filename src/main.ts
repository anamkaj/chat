import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { config } from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.setGlobalPrefix('api')
  config()

  app.enableCors({
    origin: ['https://tmk-v.ru', 'http://localhost:3000'],
    methods: 'GET,POST,OPTIONS,HEAD',
    allowedHeaders:
      'Authorization, Origin, X-Requested-With, Content-Type, Accept',
  })
  await app.listen(5000)
}
bootstrap()

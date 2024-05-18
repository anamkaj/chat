import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { config } from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.setGlobalPrefix('api')

  config()
  app.enableCors({
    origin: '*',
  })

  await app.listen(5000)
}
bootstrap()

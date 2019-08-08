import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    );
    app.setGlobalPrefix('/api');
    app.useStaticAssets({
        root: join(__dirname, '..', 'clientNg/dist/clientNg'),
        prefix: '/',
    });
    await app.listen(3000);
}
bootstrap();

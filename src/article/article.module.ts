import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { articleProvider } from './article.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [ArticleService, ...articleProvider],
    controllers: [ArticleController]
})
export class ArticleModule {}

import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { Article } from './interfaces/article.interface';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Post()
    async createArticle(@Body() articleDto: ArticleDto) {
        const newArticle = this.articleService.create(articleDto);
        return newArticle;
    }

    @Get()
    async getAllArticles(): Promise<Article[]> {
        const articles = this.articleService.findAll();
        return articles;
    }

    @Get(':id')
    async getArticle(@Param('id') id: string): Promise<Article> {
        const article = this.articleService.find(id);
        return article;
    }

    @Delete(':id')
    async deleteArticle(@Param('id') id: string): Promise<any> {
        return this.articleService.delete(id);
    }
}

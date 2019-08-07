import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Article } from './interfaces/article.interface';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class ArticleService {
    constructor(@Inject('ARTICLE_MODEL') private readonly articleModel: Model<Article>) {}

    async create(articleDto: ArticleDto): Promise<Article> {
        const newArticle = new this.articleModel(articleDto);
        return await newArticle.save();
    }

    async findAll(): Promise<Article[]> {
        const articles = await this.articleModel.find().exec();
        return articles;
    }

    async find(id: string): Promise<Article> {
        const article = this.articleModel.findById(id).exec();
        return article;
    }

    async delete(id: string): Promise<any> {
        return await this.articleModel.findByIdAndRemove(id);
    }
}

import { Connection } from 'mongoose';
// import * as mongoose from 'mongoose';
import { ArticleSchema } from './schemas/article.schema';

export const articleProvider = [
    {
        provide: 'ARTICLE_MODEL',
        useFactory: (con: Connection) => {
            return con.model('Article', ArticleSchema)
        },
        inject: ['DATABASE_CONNECTION']
    }
]

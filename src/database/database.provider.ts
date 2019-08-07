import * as mongoose from 'mongoose';

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect('mongodb://localhost/irobot', { useNewUrlParser: true, useFindAndModify: false })
        }
    },
];

import { mongoHelper } from '../orm/mongoose';

export const mongoConnect = () => mongoHelper.connect(process.env.MONGO_URL || '');

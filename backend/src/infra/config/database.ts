import { mongoHelper } from '../orm/mongoose';

export const mongoConnect = () => mongoHelper.connect('mongodb://127.0.0.1/shomedb');

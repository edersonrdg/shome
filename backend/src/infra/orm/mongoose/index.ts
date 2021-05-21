/* eslint-disable no-console */
import mongoose from 'mongoose';

export const mongoHelper = {
  async connect(url: string): Promise<void> {
    try {
      mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = mongoose.connection;
      db.once('open', () => {
        console.log('connected to MongoDB database!');
      });
    } catch (error) {
      console.error(error);
    }
  },
  mongoose,
};

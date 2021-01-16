import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;

const connectDb = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connect successfully !'.cyan.underline);
  } catch (error) {
    console.log('Connect fail !'.red.underline.bold);
    process.exit(1);
  }
};

export default connectDb;

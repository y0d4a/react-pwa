import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '.env') });
const { env } = process;

export const nodeEnv = env.NODE_ENV || 'development';
export default {
    port: env.PORT || 12000,
    secretKey: env.SECRET_KEY
};
// Config mongo database
// const mongoDB = 'mongodb://192.168.88.181:27017/fullstack';
const mongoDB = 'mongodb+srv://pnhduong:12110116@cluster0-euugq.mongodb.net/fullstack?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const { Schema } = mongoose;

export { mongoose, db, Schema };
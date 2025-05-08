import mongoose from 'mongoose';

const MONGO_URI = process.env['MONGO_URI'] as string;

if (!MONGO_URI) {
  throw new Error('Please define MONGO_URI in your .env file');
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

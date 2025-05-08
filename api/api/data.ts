import { VercelRequest, VercelResponse } from '@vercel/node';
import mongoose from 'mongoose';

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

const connect = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(MONGO_URI);
};

// Example schema
const DataSchema = new mongoose.Schema({ message: String });
const Data = mongoose.models.Data || mongoose.model('Data', DataSchema);

// API Handler
export default async function handler(req: VercelRequest, res: VercelResponse) {
  await connect();

  if (req.method === 'GET') {
    const docs = await Data.find();
    return res.status(200).json(docs);
  }

  if (req.method === 'POST') {
    const { message } = req.body;
    const newData = await Data.create({ message });
    return res.status(201).json(newData);
  }
 // export default async function handler(req: VercelRequest, res: VercelResponse) {
  //   res.status(200).json({ message: "API working fine on Vercel!" });
  // }
  res.status(405).end(); // Method not allowed
}


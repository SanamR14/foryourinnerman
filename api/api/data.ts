// /api/data.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI!;

if (!MONGO_URI) throw new Error('Missing MONGO_URI');

const connect = async () => {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(MONGO_URI);
};

const DataSchema = new mongoose.Schema({ message: String });
const Data = mongoose.models.Data || mongoose.model('Data', DataSchema);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    await connect();

    if (req.method === 'GET') {
      const docs = await Data.find();
      return res.status(200).json(docs);
    }

    if (req.method === 'POST') {
      const { message } = req.body;
      const doc = await Data.create({ message });
      return res.status(201).json(doc);
    }

    return res.status(405).end(); // Method not allowed
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}

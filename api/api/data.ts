import type { VercelRequest, VercelResponse } from '@vercel/node';
import dbConnect from '../lib/dbConnect';
import Data from '../models/Data';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    const items = await Data.find();
    return res.status(200).json(items);
  }

  if (req.method === 'POST') {
    try {
      const newItem = await Data.create(req.body);
      return res.status(201).json(newItem);
    } catch (error) {
      return res.status(400).json({ error: 'Failed to create data' });
    }
  }

  return res.status(405).end();
}

import type { VercelRequest, VercelResponse } from '@vercel/node';
import dbConnect from '../lib/dbConnect';
import Data from '../models/Data';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try{

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

  if (req.method === 'PUT') {
    const { id, ...updateData } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'ID is required for update' });
    }

    const updatedItem = await Data.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    return res.status(200).json(updatedItem);
  }

  return res.status(405).end();

}catch (err: any) {
    console.error('Function error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

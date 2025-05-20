import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import dbConnect from '../lib/dbConnect';
import User from '../models/User';
import { signToken } from '../utils/jwt';

export default async function handler(req: VercelRequest, res: VercelResponse) {

res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;
try{

    await dbConnect();
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'User already exists' });
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });
  
    const token = signToken({ userId: user._id, email });
    return res.status(201).json({ token });
}catch (err: any) {
  console.error('Error fetching images:', err);
  return res.status(500).json({ error: 'Server error' });
}
}

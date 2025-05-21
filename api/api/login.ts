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
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
  
    const token = signToken({ userId: user._id, email });
    return res.status(200).json({ token });

}catch (err: any) {
  console.error('Error fetching images:', err);
  return res.status(500).json({ error: 'Server error' });
}
}
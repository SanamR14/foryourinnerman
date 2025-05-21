import type { VercelRequest, VercelResponse } from '@vercel/node';
import { verifyToken } from '../utils/jwt';
import dbConnect from '../lib/dbConnect';
import User from '../models/User';

type JwtPayload = {
  userId: string;
  email: string;
  iat: number;
  exp: number;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).end();

  try {
    const cookie = req.headers.cookie || '';
    const tokenMatch = cookie.match(/token=([^;]+)/);
    const token = tokenMatch?.[1];

    if (!token) return res.status(401).json({ error: 'Not authenticated' });

    const decoded = verifyToken(token) as JwtPayload;

    await dbConnect();
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) return res.status(401).json({ error: 'User not found' });

    return res.status(200).json({ user });
  } catch (err: any) {
    console.error('Session check failed:', err);
    return res.status(401).json({ error: 'Invalid or expired session' });
  }
}

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  // Clear cookie by setting Max-Age=0
  res.setHeader(
    'Set-Cookie',
    'token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict; Secure'
  );

  res.status(200).json({ message: 'Logged out successfully' });
}

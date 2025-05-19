import { VercelRequest, VercelResponse } from '@vercel/node';

import dbConnect from '../lib/dbConnect';
import Image from '../models/Image';

// app.post('/upload', upload.single('image'), async (req, res) => {
//   const newImage = new ImageModel({
//     name: req.file.originalname,
//     data: req.file.buffer,
//     contentType: req.file.mimetype,
//   });
//   await newImage.save();
//   res.send('Image saved!');
// });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'GET') return res.status(405).end();

  // try {
  //   await dbConnect();

  //   const total = await Image.countDocuments();
  //   if (total === 0) return res.status(404).json({ error: 'No images found' });

  //   const today = new Date();
  //   const dayIndex = today.getDate() + today.getMonth() * 31 + today.getFullYear(); // any formula
  //   console.log(dayIndex);
  //   const index = dayIndex % total;

  //   const image = await Image.findOne().skip(index);
  //   if (!image) return res.status(404).json({ error: 'Image not found' });

  //   return res.status(200).json(image);
  // } catch (err: any) {
  //   console.error('Error fetching image of the day:', err);
  //   return res.status(500).json({ error: 'Server error' });
  // }

try {
  await dbConnect();

  const images = await Image.find();
  if (!images || images.length === 0) {
    return res.status(404).json({ error: 'No images found' });
  }

  return res.status(200).json(images);
} catch (err: any) {
  console.error('Error fetching images:', err);
  return res.status(500).json({ error: 'Server error' });
}

}

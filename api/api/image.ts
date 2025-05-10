import { VercelRequest, VercelResponse } from '@vercel/node';

import dbConnect from '../lib/dbConnect';
import Data from '../models/Data';
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
    try{
    await dbConnect();
  
    if (req.method === 'POST') {
      try {
        const newItem = await Data.create(req.body);
        return res.status(201).json(newItem);
      } catch (error) {
        return res.status(400).json({ error: 'Failed to create data' });
      }
    }

    if (req.method === 'POST') {
        const { name, data, contentType } = req.body;
  
        if (!name || !data || !contentType) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
  
        const buffer = Buffer.from(data, 'base64');
  
        const newImage = new Image({
          name,
          data: buffer,
          contentType,
        });
  
        await newImage.save();
        return res.status(201).json({ message: 'Image saved successfully' });
      }
  
    return res.status(405).end();
  
  }catch (err: any) {
      console.error('Function error:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

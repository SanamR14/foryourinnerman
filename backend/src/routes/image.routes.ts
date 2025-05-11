// routes/image.routes.ts
import express from 'express';
import Image from '../models/image.model';

const router = express.Router();

router.get('/images', async (_req, res) => {
  const data = await Image.find();
  res.json(data);
});

router.post('/images', async (req, res) => {
  try {
    const { name, data, contentType } = req.body;
    const newImage = new Image({ name, data, contentType });
    await newImage.save();
    res.status(201).json({ message: 'Image saved', image: newImage });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save image', details: err });
  }
});

export default router;

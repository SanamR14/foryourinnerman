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
    const { url, public_id, createdAt } = req.body;
    const newImage = new Image({ url, public_id, createdAt });
    await newImage.save();
    res.status(201).json({ message: 'Image saved', image: newImage });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save image', details: err });
  }
});

router.delete('/images/:id', async (_req, res) => {
  try {
    const deletedItem = await Image.findByIdAndDelete(_req.params.id);
    // if (!deletedItem) {
    //   return status(404).json({ message: 'Item not found' });
    // }
   res.json({ message: 'Item deleted successfully', item: deletedItem });
  } catch (error) {
    console.error(error);
   // res.status(500).json({ message: 'Server error' });
  }
});

export default router;

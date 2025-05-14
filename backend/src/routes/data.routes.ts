// src/routes/data.routes.ts
import express from 'express';
import { DataModel } from '../models/data.model';
import Image from '../models/image.model';

const router = express.Router();

router.get('/', async (_req, res) => {
  const data = await DataModel.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const newData = new DataModel(req.body);
  const saved = await newData.save();
  res.json(saved);
});


router.delete('/:id', async (req) => {
  try {
    const deletedItem = await DataModel.findByIdAndDelete(req.params.id);
    // if (!deletedItem) {
    //   return status(404).json({ message: 'Item not found' });
    // }
   // res.json({ message: 'Item deleted successfully', item: deletedItem });
  } catch (error) {
    console.error(error);
   // res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', async (_req, res) => {
  try {
    const updatedArticle = await DataModel.findByIdAndUpdate(
      _req.params.id,
      { $set: _req.body },
      { new: true, runValidators: true }
    );
    res.json(updatedArticle);
  } 
  catch (error) {
    console.error(error);
   // res.status(500).json({ message: 'Server error' });
  }
});

export default router;

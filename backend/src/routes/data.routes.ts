// src/routes/data.routes.ts
import express from 'express';
import { DataModel } from '../models/data.model';

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

export default router;

// src/models/data.model.ts
import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
});

export const DataModel = mongoose.model('Data', DataSchema);

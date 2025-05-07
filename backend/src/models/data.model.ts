// src/models/data.model.ts
import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

export const DataModel = mongoose.model('Data', DataSchema);

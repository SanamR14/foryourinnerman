import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
  });



export default mongoose.model('Data', DataSchema);


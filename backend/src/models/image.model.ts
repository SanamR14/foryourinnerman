import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  name: String,
  data: String, // store base64 string
  contentType: String
});

export default mongoose.model('Image', imageSchema);
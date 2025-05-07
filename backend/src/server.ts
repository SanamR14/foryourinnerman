// src/server.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dataRoutes from './routes/data.routes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydata')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

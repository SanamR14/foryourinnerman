// src/server.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dataRoutes from './routes/data.routes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://sanamrajaboopathi:Li8Q7Sa1hOOWTH5f@cluster0.qffpppf.mongodb.net/')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

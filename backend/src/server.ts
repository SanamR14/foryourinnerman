// // src/server.ts
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dataRoutes from './routes/data.routes';

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://sanamrajaboopathi:Li8Q7Sa1hOOWTH5f@cluster0.qffpppf.mongodb.net/')
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error(err));

// app.use('/api/data', dataRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import dataRoutes from './routes/data.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb+srv://sanamrajaboopathi:Li8Q7Sa1hOOWTH5f@cluster0.qffpppf.mongodb.net/test";
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

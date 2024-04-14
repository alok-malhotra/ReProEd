import express from 'express';
import promptRouter from './routes/api/prompt.js'
import cors from 'cors';

const app = express();
app.use(cors());

// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/prompt', promptRouter)

// Other app configurations...
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
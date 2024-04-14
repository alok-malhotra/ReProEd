import express from 'express';
import readline from 'readline';
// import usersRouter from './routes/api/users.js';
import authRouter from './routes/api/auth.js';
import profileRouter from './routes/api/profile.js';
import postRouter from './routes/api/post.js';
import promptRouter from './routes/api/prompt.js'
import cors from 'cors';

const app = express();

// var cors = require('cors');
app.use(cors());

// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'));

// Define routes
// app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);
app.use('/api/post', postRouter);
app.use('/api/prompt', promptRouter)

// Other app configurations...
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question("Reproductive Health Inputs (age,sex,martial status,info type format): \n", (all_info) => 
//   generateMeta(all_info))
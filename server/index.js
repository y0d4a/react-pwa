import path from 'path';
import express from 'express';
import cors from 'cors';
import config from './configs';
import router from './routes';
import userRouter from './routes/user';

// Initial server from express 
const server = express();

// Set up view engine
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));


server.use(cors({
    origin: 'http://localhost:3000'
}));

// Support json in request body
server.use(express.json());
// Support URL encoded in request body
server.use(express.urlencoded({ extended: false }));
server.use('/api-v1', router);
server.use('/api-v1/users', userRouter);
// Make sure file in public folder working
server.use(express.static('public'));

server.listen(config.port, () => {
    console.log('Express listen on port ', config.port);
})
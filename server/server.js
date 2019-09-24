import express from 'express';
import cors from 'cors';
import config from './configs';
import router from './routes';
import categoryRouter from './routes/category';
import postRouter from './routes/post';
import renderRouterMiddleware from '../iso-middleware/renderRoute';
import expressStaticGzip from 'express-static-gzip';

// Initial server from express 
const server = express();

server.use(cors({
    origin: 'http://localhost:3000'
}));

// Support json in request body
server.use(express.json());
// Support URL encoded in request body
server.use(express.urlencoded({ extended: false }));
server.use('/api-v1', router);
// server.use('/api-v1/users', userRouter);
// Make sure file in public folder working
// server.use('/', express.static('public'));
server.use('/', expressStaticGzip('public', {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', 'public, max-age=31536000');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    }
}));
server.use('/api-v1/categories', categoryRouter);
server.use('/api-v1/posts', postRouter);
server.get('*', renderRouterMiddleware);

server.listen(config.port, () => {
    console.log('Express listen on port ', config.port);
})
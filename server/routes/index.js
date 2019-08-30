import express from 'express';

// Initial router
const router = express.Router();

router.use((req, res, next) => {
    console.log('Main router. Time: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    res.render('index', { content: '...' });
});

export default router;
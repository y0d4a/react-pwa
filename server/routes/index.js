import express from 'express';

// Initial router
const router = express.Router();

router.use((req, res, next) => {
    console.log('Main router. Time: ', Date.now());
    return next();
});


export default router;
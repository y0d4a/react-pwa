import express from 'express';
import PostController from '../controllers/posts';


// Initial router
const router = express.Router();

router.use((req, res, next) => {
    console.log('Post router. Time: ', Date.now());
    next();
});

/**
 * Get post
 */
router.get('/', PostController.getPosts);
/**
 * Create post
 */
router.post('/', PostController.create);

const postRouter = router;

export default postRouter;

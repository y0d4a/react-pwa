import express from 'express';
import CategoryController from '../controllers/categories';
import PostController from '../controllers/posts';


// Initial router
const router = express.Router();

router.use((req, res, next) => {
    console.log('Category router. Time: ', Date.now());
    next();
});

/**
 * Get categories
 */
router.get('/', CategoryController.get);
/**
 * Get post of category
 */
router.get('/:cid/posts/:pid/details', PostController.getPostById);
/**
 * Create user
 */
router.post('/', CategoryController.create);
/**
 * Delete user by userId
 */
router.delete('/:id', CategoryController.delete);

const categoryRouter = router;

export default categoryRouter;

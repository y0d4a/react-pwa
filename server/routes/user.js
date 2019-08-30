import express from 'express';
import UserController from '../controllers/users';


// Initial router
const router = express.Router();

router.use((req, res, next) => {
    console.log('User router. Time: ', Date.now());
    next();
});

/**
 * Get users
 */
router.get('/', UserController.getUsers);
/**
 * Create user
 */
router.post('/', UserController.create);
/**
 * Delete user by userId
 */
router.delete('/users/:id', async (req, res) => {
    try {
      const result = await ModelUser.deleteOne({ _id: req.params.id }).exec();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
});
/**
 * Login
 */
router.post('/login', UserController.authenticate);

const userRouter = router;

export default userRouter
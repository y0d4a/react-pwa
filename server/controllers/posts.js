import ModelPost from '../models/post';
import jwt from 'jsonwebtoken';
import config from '../configs';

const PostController = {
    getPosts: (req, res, next) => {
        const id = req.query['cid'];
        if (id) {
            ModelPost.find({ category_id: id }).sort({createdAt: -1}).limit(6).exec((error, data) => {
                if (error) next(error);
                return res.status(200).send({ data }); 
            });
        } else {
            ModelPost.find().sort({createdAt: -1}).limit(5).exec((error, data) => {
                if (error) next(error);
                return res.status(200).send({ data }); 
            });
        }
    },
    create: (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) return res.status(401).send({ message: 'No token provided' });
        jwt.verify(token.split(' ')[1], config.secretKey, null, (err, decoded) => {
          if (err) return res.status(501).send({ message: 'Failed to authenticate token.' });
          ModelPost.create(new ModelPost(req.body), (err, result) => {
            if (err) next(err);
            else res.json({ status: 200, message: 'Post added successfully!!!', data: null });
          });
        });
    },
    getPostById: (req, res, next) => {
        const cid = req.params.cid;
        const pid = req.params.pid;
        ModelPost.findOne({_id: pid, category_id: cid}).exec((error, data) => {
            if (error) next(error);
            return res.status(200).send({ data });
        })
    }
}

export default PostController;
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ModelCategory from '../models/category';
import config from '../configs';

const CategoryController = {
    get: (req, res, next) => {
        ModelCategory.find((error, data) => {
            if (error) next(error);
            return res.status(200).send({ data }); 
        });
    },
    create: (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) return res.status(401).send({ message: 'No token provided' });
        jwt.verify(token.split(' ')[1], config.secretKey, null, (err, decoded) => {
          if (err) return res.status(501).send({ message: 'Failed to authenticate token.' });
          const category = new ModelCategory(req.body);
          category.name = category.name.charAt(0).toUpperCase() + slice(1);
          ModelCategory.create(category, (err, result) => {
            if (err) next(err);
            else res.json({ status: 200, message: 'Category added successfully!!!', data: null });
          });
        });
    },
    delete: (req, res, next) => {
      const token = req.headers['authorization'];
      if (!token) return res.status(401).send({ message: 'No token provided' });
      jwt.verify(token.split(' ')[1], config.secretKey, null, (err, decoded) => {
        if (err) return res.status(501).send({ message: 'Failed to authenticate token.' });
        ModelCategory.deleteOne({_id: req.params.id}).exec((err, result) => {
          if (err) next(err);
          else res.status(200).send(result);
        })
      })
    }
};

export default CategoryController;
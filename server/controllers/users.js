/* eslint-disable consistent-return */
/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ModelUser from '../models/user.js.js';
import config from '../configs';

const UserController = {
  getUsers: (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send({ message: 'No token provided' });
    jwt.verify(token.split(' ')[1], config.secretKey, null, (err, decoded) => {
      if (err) return res.status(501).send({ message: 'Failed to authenticate token.' });
      ModelUser.find((error, data) => {
        if (error) next(error);
        return res.status(200).send({ data });
      });
    });
  },
  create: (req, res, next) => ModelUser.create(new ModelUser(req.body), (err, result) => {
    if (err) next(err);
    else res.json({ status: 200, message: 'User added successfully!!!', data: null });
  }),
  authenticate: (req, res, next) => ModelUser.findOne(
    { email: req.body.email },
    (err, userInfo) => {
      if (err) next(err);
      else if (bcrypt.compare(req.body.password, userInfo.password)) {
        userInfo.password = '';
        const token = jwt.sign(
          { userInfo },
          config.secretKey,
          { expiresIn: 3600 }
        );
        res.json({
          message: 'User found!!!',
          token: `Bearer ${token}`
        });
      } else {
        res.json({
          status: 500,
          message: 'Invalid email/password!!!',
          data: null
        });
      }
    }
  )
};

export default UserController;

import express from 'express';
import User from '../schemas/user';

const router = express.Router();

router.get('/', async (req, res, next) => {
    const user = await User.find({});
    res.json(user);
});

module.exports = router;
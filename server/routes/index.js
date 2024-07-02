const router = require('express').Router();
const userSport = require('./api/user-sport.api.routes')
const user = require('./api/user.api.routes');
const sport = require('./api/sport.api.routes');
router.use('/user-sports', userSport);
router.use('/users', user);
router.use('/sports', sport);


module.exports = router

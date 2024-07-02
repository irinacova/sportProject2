const {User} = require('../db/models')

async function findUser (req,res,next) {
  const user = await User.findOne(req.params.id)
  res.locals.user = user;
  next();
}

module.exports = findUser;

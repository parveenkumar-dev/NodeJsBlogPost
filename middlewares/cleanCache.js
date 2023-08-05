const { clearHash } = require('../services/cache');

// clean the redis cache after blog created to make sure new data visible in blog list page
module.exports = async (req, res, next) => {
  await next(); // this trick will make this middleware to run after endpoint executed.

  clearHash(req.user.id);
};

// Imports
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// Middleware
router.use('/Users', userRoutes);
router.use('/Posts', postRoutes);
router.use('/Comments', commentRoutes);
// Exports
module.exports = router;
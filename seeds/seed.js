// import sequelize
const sequelize = require('../config/connection');

// import seeds
const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComments = require('./comment');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();
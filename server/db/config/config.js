require('dotenv').config();

module.exports = {
    development: {
        username:  process.env.USERNAME_FOR_BASE,
        password: process.env.PASSOWRD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: process.env.DIALECT
    },
    test: {
        username:  process.env.USERNAME_FOR_BASE,
        password: process.env.PASSOWRD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: process.env.DIALECT
    },
    production: {
        username: process.env.USERNAME_FOR_BASE,
        password: process.env.PASSOWRD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: process.env.DIALECT
    }
};

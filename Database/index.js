const Sequelize = require('sequelize')

require('dotenv').config();

const database = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    }
)

async function VerifyConnection(){
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
VerifyConnection();

module.exports = database;

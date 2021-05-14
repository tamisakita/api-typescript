import { Sequelize } from 'sequelize';

const dbConn = new Sequelize('mysql://avanade:password@localhost:3306/avanade');

export default dbConn;
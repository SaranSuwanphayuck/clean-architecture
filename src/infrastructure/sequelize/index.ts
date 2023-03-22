import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
  String(process.env.DB_DATABASE),
  String(process.env.DB_USERNAME),
  String(process.env.DB_PASSWORD),
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
    logging: false
  }
)

export { sequelize }
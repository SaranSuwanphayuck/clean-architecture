import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import * as models from './init-models'
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

export default {
  ...models,
  initModels: () => models.initModels(sequelize),
  sequelize,
  Sequelize
}

export { sequelize }
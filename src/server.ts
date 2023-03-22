import express from 'express'
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from './infrastructure/graph/schema'
import resolvers from './infrastructure/graph/resolvers'
import models from './infrastructure/sequelize'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
 
const server = new ApolloServer({
  schema,
  introspection: true,
})

server.start().then(() => {
  server.applyMiddleware({
    app,
    path: '/graphql',
    onHealthCheck: () => new Promise((resolve, reject) => {
      try {
        resolve('Health check OK')
      } catch (err) {
        reject(err)
      }
    }) 
  })
})

try {
  models.initModels()
  app.listen(PORT, () => {
    console.info(`SERVER START ON PORT ${PORT}`)
  })  
} catch (err: any) {
  console.error(err.message)
  process.exit(1)
}

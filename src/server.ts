import express from 'express'
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import { GraphQLSchema } from 'graphql'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000

const tempSchema: GraphQLSchema = new GraphQLSchema({})
 
const server = new ApolloServer({
  schema: tempSchema,
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
  app.listen(PORT, () => {
    console.info(`SERVER START ON PORT ${PORT}`)
  })  
} catch (err: any) {
  console.error(err.message)
  process.exit(1)
}

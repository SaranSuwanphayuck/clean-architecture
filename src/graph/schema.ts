import { gql } from 'apollo-server-express'

export default gql`
  input CreateUserInput {
    name: String!
    address: String!
    email: String!
    password: String!    
  }

  type GeneralPayload {
    code: Int
    message: String
    error: String
  }

  type User {
    id: Int
    name: String
    address: String
    email: String
    password: String
  }
  
  type Query {
    users: [User]    
  }

  type Mutation {
    createUser(input: CreateUserInput!): GeneralPayload
  }
`
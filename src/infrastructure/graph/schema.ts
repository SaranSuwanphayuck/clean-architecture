import { gql } from 'apollo-server-express'

export default gql`
  input CreateUserInput {
    name: String!
    address: String!
    email: String!
    password: String!    
  }

  type StatusPayload {
    code: Int
    message: String
    error: String
  }

  type DataPayload {
    data: [User]
    status: StatusPayload
  }

  type GeneralPayload {
    status: StatusPayload
  }

  type User {
    id: Int
    name: String
    address: String
    email: String
    password: String
  }
  
  type Query {
    users: DataPayload   
  }

  type Mutation {
    createUser(input: CreateUserInput!): GeneralPayload
  }
`
import { createUser as createUserInteract, ICreateUser } from "../../interface/use-case/user"
import { createUser as createUserInfra } from '../sequelize/user'

interface GeneralPayload {
  message?: string
  code: number
  error?: string
}

const createUser = async (input: ICreateUser) => {
  try {
    await createUserInteract(input, createUserInfra)
    return { message: 'OK', code: 201 }
  } catch (err: any) {
    return { error: err.message, code: 500 }
  }
}

const resolvers = {
  Query: {
    users: null
  },
  Mutation: {
    createUser: createUser
  }
}

export default resolvers
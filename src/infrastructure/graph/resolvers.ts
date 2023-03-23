import { createUser as createUserInteract, ICreateUser } from "../../interface/use-case/user"
import { createUser as createUserInfra } from '../sequelize/init-models'

interface GeneralPayload {
  message?: string
  code: number
  error?: string
}

const createUser = async (_: unknown, args: {input: ICreateUser}): Promise<GeneralPayload> => {
  try {
    const { input } = args
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
    createUser
  }
}

export default resolvers
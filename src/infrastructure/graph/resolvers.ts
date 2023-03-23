import { CreateUserInput } from "../../interface/user"
import { createUser as createUserInteractor } from "../../use-case/user"

interface GeneralPayload {
  message?: string
  code: number
  error?: string
}

const createUser = async (args: { input: CreateUserInput }): Promise<GeneralPayload> => {
  try {
    const { input } = args
    await createUserInteractor(input)
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
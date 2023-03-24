import { User } from "../../domain/models/init-models"
import { CreateUserInput } from "../../repository/user"
import { createUser as createUserInteractor, users as usersInteractor } from "../../use-case/user"

interface StatusPayload {
  message?: string
  code: number
  error?: string
}

interface DataPayload {
  data: User[] | null
  status: StatusPayload
}

interface GeneralPayload {
  status: StatusPayload
}
export interface CreateUserArgs {
  input: CreateUserInput
}

const createUser = async (_: unknown, args: CreateUserArgs): Promise<GeneralPayload> => {
  try {
    const { input } = args
    await createUserInteractor(input)
    return { status: { message: 'OK', code: 201 } }
  } catch (err: any) {
    console.log(err.name)
    return { status: { error: err.message, code: 500 } }
  }
}

const users = async (_: unknown): Promise<DataPayload> => {
  try {
    const users = await usersInteractor('')
    return { data: users, status: { code: 200, message: 'OK' } }
  } catch (err: any) {
    console.log(err.name)
    return { data: null, status: { error: err.message, code: 500 } }
  }
}

const resolvers = {
  Query: {
    users
  },
  Mutation: {
    createUser
  }
}

export default resolvers
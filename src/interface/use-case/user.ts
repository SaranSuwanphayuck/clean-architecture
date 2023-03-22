export interface ICreateUser {
  name: string
  address: string
  email: string
  password: string
}

export const createUser = async (input: ICreateUser, createUserInteractor: (i: ICreateUser) => Promise<void>) => {
  await createUserInteractor(input)
}
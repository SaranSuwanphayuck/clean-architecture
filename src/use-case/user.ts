import { MailServiceInfrastructure } from '../infrastructure/mail-service'
import MailService from '../domain/email'
import { UserRepository, CreateUserInput } from '../interface/user'

export const createUser = async (input: CreateUserInput) => {
  try {
    const userRepo = new UserRepository()
    const mailService = new MailService(new MailServiceInfrastructure())
    
    await userRepo.createUser(input)
    await mailService.sendCreateUserEmail(input.email)

    return
  } catch (err: any) {
    throw err
  }
}

export const users = async (name?: string) => {
  try {
    const userRepo = new UserRepository()
    const users = await userRepo.getUsersByName(name || '')

    return users
  } catch (err: any) {
    throw err
  }
}
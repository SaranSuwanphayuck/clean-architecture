import { MailServiceInfrastructure } from '../infrastructure/mail-service'
import MailService from '../domain/email'
import { DomainError } from '../domain'
import { UserRepository, CreateUserInput } from '../interface/user'
import { RepositoryError } from '../interface'
import { UseCaseError } from '.'


export const createUser = async (input: CreateUserInput) => {
  try {
    const userRepo = new UserRepository()
    const mailService = new MailService(new MailServiceInfrastructure())
    
    await userRepo.createUser(input)
    await mailService.sendCreateUserEmail(input.email)

    return
  } catch (err: any) {
    if (err instanceof DomainError || err instanceof RepositoryError) {
      throw err
    } else {
      throw new UseCaseError(err.message)
    }
  }
}

export const users = async (name?: string) => {
  try {
    const userRepo = new UserRepository()
    const users = await userRepo.getUsersByName(name || '')

    return users
  } catch (err: any) {
    if (err instanceof DomainError || err instanceof RepositoryError) {
      throw err
    } else {
      throw new UseCaseError(err.message)
    }
  }
}
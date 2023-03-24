import { Op } from "sequelize";
import { User } from "../../domain/models/init-models";
import { CreateUserInput } from "./interface";
import { RepositoryError } from "..";
import { CustomError } from "../../domain";

class UserRepository {
  async getUserById(id: number): Promise<User | null> {
    try {
      return User.findByPk(id)
    } catch (err: any) {
      if (err instanceof CustomError) {
        throw err
      } else {
        throw new RepositoryError(err.message)
      }
    }
  }

  async getUsersByName(name: string): Promise<User[]> {
    return User.findAll({ where: { name: { [Op.like]: `%${name}%` } } })
  }

  async createUser(input: CreateUserInput): Promise<User> {
    return User.create(input)
  }
}

export default UserRepository

import { Op } from "sequelize";
import { User } from "../../domain/models/init-models";
import { CreateUserInput } from "./interface";


class UserRepository {
  async getUserById(id: number): Promise<User | null> {
    return User.findByPk(id)
  }

  async getUsersByName(name: string): Promise<User[]> {
    return User.findAll({ where: { name: { [Op.like]: `%${name}%` } } })
  }

  async createUser(input: CreateUserInput): Promise<User> {
    return User.create(input)
  }
}

export default UserRepository

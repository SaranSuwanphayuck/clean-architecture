import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import { IUser } from '../../domain/user';
import { ICreateUser } from '../../interface/use-case/user';

export interface UserAttributes extends IUser {
  createdAt?: Date
  updatedAt?: Date
}

export type UserPk = "id";
export type UserId = User[UserPk];
export type UserOptionalAttributes = "id" | "name" | "email" | "password" | "address";
export type UserCreationAttributes = Optional<UserAttributes, UserOptionalAttributes>;
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id!: number;
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof User {
    return User.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'User',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}


export const createUser =  async (input: ICreateUser) => { 
  await User.create(input)
  return
}
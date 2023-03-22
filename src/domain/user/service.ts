import { IUser } from ".";

const getDetail = (user: IUser): string => {
  return `${user.name}, ${user.email}, ${user.address}`
}
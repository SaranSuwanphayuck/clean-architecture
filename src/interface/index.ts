import { CustomError } from "../domain"

class RepositoryError extends CustomError {
  name: string = 'RepositoryError'
  constructor (message: string) {
    super(message)
  }
}

export {
  RepositoryError
}
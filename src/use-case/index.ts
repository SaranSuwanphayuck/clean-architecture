import { CustomError } from "../domain"

class UseCaseError extends CustomError {
  name: string = 'UseCaseError'
  constructor (message: string) {
    super(message)
  }
}

export {
  UseCaseError
}
class CustomError extends Error {
  name: string = 'CustomError'
  constructor (message: string) {
    super(message)
  }
}

class DomainError extends CustomError {
  name: string = 'DomainError'
  constructor (errMessage: string) {
    super(errMessage)
  }
}

export {
  CustomError,
  DomainError
}
import { CustomError, DomainError } from "..";

export interface SendMailInput {
  to: string
  subject: string
  html: string
}

class MailService {
  
  sendMail: (input: SendMailInput) => Promise<void>;

  constructor (service: any) {
    this.sendMail = service.sendMail
  }

  async sendCreateUserEmail (to: string) {
    try {
      await this.sendMail({
        to,
        subject: 'User created successfullly!',
        html: `<p> Hello from clean architecture </p>`,
      })
    } catch (err: any) {
      if (err instanceof CustomError) {
        throw err
      } else {
        throw new DomainError(err.message)
      }
    }
  }
} 

export default MailService
import { SendMailInput } from '../../domain/email'
import { sendMail } from './sendMail'

export class MailServiceInfrastructure {
  sendMail: (input: SendMailInput) => Promise<void>

  constructor () {
    this.sendMail = sendMail
  }
}
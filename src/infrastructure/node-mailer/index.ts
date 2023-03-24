import { SendMailInput } from '../../interface/email'
import { sendMail } from './sendMail'

export class MailServiceInfrastructure {
  sendMail: (input: SendMailInput) => void

  constructor () {
    this.sendMail = sendMail
  }
}
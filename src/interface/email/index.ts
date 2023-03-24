export interface SendMailInput {
  to: string
  subject: string
  html: string
}

class MailService {
  
  sendMail: (input: SendMailInput) => void;

  constructor (service: any) {
    this.sendMail = service.sendMail
  }

  sendCreateUserEmail (to: string) {
    this.sendMail({
      to,
      subject: 'User created successfullly!',
      html: `<p> Hello from clean architecture </p>`,
    })
  }
} 

export default MailService
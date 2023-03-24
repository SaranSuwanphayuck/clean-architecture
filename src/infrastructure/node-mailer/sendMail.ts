import nodemailer from 'nodemailer'
import { SendMailInput } from '../../interface/email';
import { google } from 'googleapis' 
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
)

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
})

export const sendMail = async (input: SendMailInput) => {
  const mailOptions = {
    ...input,
    from: process.env.MAIL_SERVICE_USER,
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_SERVICE_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: await oauth2Client.getAccessToken()
    } 
  } as SMTPTransport.Options)

  return
}

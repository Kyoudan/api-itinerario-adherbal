import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

const user: string = process.env.NODEMAILER_USER as string;
const password: string = process.env.NODEMAILER_PASS as string;

const EmailConfig = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: `${user}`,
    pass: `${password}`,
  },
});

export default EmailConfig;

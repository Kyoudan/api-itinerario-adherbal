import EmailConfig from "./nodemailer.config";

export default (
  from: string,
  to: string,
  subject: string,
  html: string,
  text: string
) => {
  EmailConfig.sendMail({
    from: `${from}`,
    to: `${to}`,
    subject: `${subject}`,
    html: `${html}`,
    text: `${text}`,
  })
    .then(() => {
      return;
    })
    .catch((err) => {
      return console.log("Erro ao enviar", err);
    });
};

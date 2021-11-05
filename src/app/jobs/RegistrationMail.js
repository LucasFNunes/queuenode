import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Queue Test  <queue@queuetest.com.br>",
      to: "${name} <${email}>",
      subject: "Cadastro de usuario",
      html: "Olá, ${name}, bem vindo ao sistema de filas",
    });
  },
};

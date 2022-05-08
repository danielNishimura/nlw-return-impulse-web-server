import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "cf055aaf567730",
        pass: "d2e4fd40c03299"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <testeReact@gmail.com>',
        to: 'Daniel Nishimura <nishimurani@gmail.com>',
        subject,
        html: body,
    });
    }
}
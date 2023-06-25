// Importacion del modulo
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.HOST_MAILTRAP,
    port: process.env.PORT_MAILTRAP,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP
    }
})


module.exports.sendMailToUser = async(userMail,token)=>{
    let info = await transporter.sendMail({
    from: 'admin@esfot.com',
    to: userMail,
    subject: "Verifica tu cuenta de correo electrónico",
    html: `<a href="http://localhost:3003/user/confirmar/${token}">Clic para confirmar tu cuenta</a>`,
    });
    console.log("Message sent: %s", info.messageId);
}
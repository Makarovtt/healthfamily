import nodemailer from 'nodemailer';

export default async (req, res) => {
    const { name, phone, date } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: process.env.DB_USER,
            pass: process.env.DB_PASWORD,
        },
    });

    try {
        const emailRes = await transporter.sendMail({
            from: process.env.DB_USER,
            to: process.env.TO_MAIL,
            subject: `Новая заявка с сайта Топпинговых полов`,
            html: `<p>Новая заявка с сайта Топпинговых полов</p>
          <p><strong>Имя: </strong> ${name} </p>
          <p><strong>Телефон: </strong> ${phone} </p>
          <p><strong>Дата заявки: </strong> ${date} </p>
          `,
        });

        console.log('Message Sent');
    } catch (err) {
        console.log(err);
    }
    console.log(req.body);
    res.status(200).json(req.body);
};



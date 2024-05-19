import createTransporter from '../services/smtp/sendEmail.js';

export const contactController = async (req, res) => {
  const { email, subject, message } = req.body;
  const emailQueue = {}; // Cola para rastrear los tiempos de envío de correos electrónicos

  try {
    // Verificación de frecuencia de envío de correo electrónico
    const currentTime = Date.now();
    const emailKey = email.toLowerCase(); // Normaliza la dirección de correo electrónico para evitar duplicados

    if (emailQueue[emailKey] && currentTime - emailQueue[emailKey] < 1800000) { // 1800000 milisegundos = 30 minutos
      throw new Error('Debes esperar 30 minutos antes de enviar otro correo electrónico.');
    }

    // Crear el transportador
    const transporter = createTransporter();

    // Opciones del correo electrónico
    const mailOptions = {
      from: email,
      to: 'somnijoyas@gmail.com',
      subject: `${email} / ${subject}`,
      text: message
    };

    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);

    // Registra la marca de tiempo del envío del correo electrónico
    emailQueue[emailKey] = currentTime;

    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el correo' });
  }
};

export const buyController = async (req, res) => {
  const { email, name } = req.body;
  try {
    const transporter = createTransporter();
    const mailOptions = {
      from: 'Somni Joyas <somnijoyas@gmail.com>',
      to: email,
      subject: "Somni Joyas / Gracias por su compra",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <header style="display:flex; align-items: center;"> 
            <img src="cid:unique@nodemailer.com" alt="Gracias por su compra" style="width: 40px; margin-right: 10px;"/>
            <h1 style="color: #333;">Somni Joyas</h1>
          </header>
          <h3 style="color: #333;">Hola ${name},</h3>
          <p>Muchas gracias por elegirnos. Puedes ver los detalles del pedido en su portal de usuario. En breve recibirás el seguimiento de su envío.</p>
          <p>Saludos,<br>El equipo de Somni Joyas</p>
        </div>
      `,
      attachments: [
        {
          filename: 'icono1.png',
          path:  './resources/icono1.png',
          cid: 'unique@nodemailer.com',
        }
      ]
    };
    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el correo' });
  }
};
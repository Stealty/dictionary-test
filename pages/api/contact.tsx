import nodemailer from 'nodemailer';
export default async (req: any, res: any) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  try {
    if (!email) {
      res.status(400).send('Please enter a valid email');
      console.log('Please enter a valid email');
    }
    if (!message) {
      res.status(400).send('Please enter a message');
      console.log('Please enter a message');
    }
    if (!name) {
      res.status(400).send('Please enter a name');
      console.log('Please enter a name');
    } else {
      const emailResponse = await transporter.sendMail({
        from: email,
        to: 'biellbigama@gmail.com',
        subject: `Contact form submission from ${name}`,
        html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>
      `,
      });

      console.log('Message Sent', emailResponse.messageId);
    }
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};

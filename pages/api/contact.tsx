import nodemailer from 'nodemailer';
export default async (req: any, res: any) => {
  const { name, email, message } = req.body;

  const validName = name.trim();
  const validEmail = email.trim();
  const validMessage = message.trim();

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
    if (!email || !validEmail) {
      res.status(400).send('Please enter a valid email');
      console.log('Please enter a valid email');
    }
    if (!message || !validMessage) {
      res.status(400).send('Please enter a message');
      console.log('Please enter a message');
    }
    if (!name || !validName) {
      res.status(400).send('Please enter a name');
      console.log('Please enter a name');
    } else {
      const emailResponse = await transporter.sendMail({
        from: email,
        to: 'biellbigama@gmail.com',
        subject: `Contact form submission from ${validEmail}`,
        html: `
        <td class="esd-stripe" align="center">
    <table class="es-content-body" style="background-color: #ffffff; background-image: url(https://tlr.stripocdn.email/content/guids/CABINET_3c44d21222e005d5e11c4c6e5d385fdf/images/group_Nmh.png); background-repeat: no-repeat; background-position: center top;" width="560" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" background="https://tlr.stripocdn.email/content/guids/CABINET_3c44d21222e005d5e11c4c6e5d385fdf/images/group_Nmh.png">
        <tbody>
            <tr>
                <td class="esd-structure es-p40t es-p40b es-p20r es-p20l es-m-p20t es-m-p20b" align="left">
                    <table width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td class="es-m-p0r es-m-p20b esd-container-frame" width="520" valign="top" align="center">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-text es-p40r es-p40l es-m-p0r es-m-p0l">
                                                    <h1><strong>Email: </strong>${validEmail}</h1>
                                                    <h2><strong>Name: </strong>${validName}</h2>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-image es-p20t es-p20r es-m-p0r" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/guids/CABINET_3c44d21222e005d5e11c4c6e5d385fdf/images/_x37__MML.png" alt="Cat" style="display: block;" title="Cat" width="132"></a></td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-text es-p40r es-p40l es-m-p0r es-m-p0l">
                                                    <p><strong>Message: </strong>${validMessage}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-spacer" height="550"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</td>`,
      });

      {
        /* <p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${validName} </p><br>
      <p><strong>Message: </strong> ${validMessage} </p><br>
      `,
      }); */
      }

      console.log('Message Sent', emailResponse.messageId);
    }
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};

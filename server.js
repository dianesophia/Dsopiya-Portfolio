import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';

const app = express();
const port = 5000;

const resend = new Resend('re_R6F3pdbs_6XVRWHsQUx851yfg8oZfJruN');

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { from_name, from_email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: `${from_name} <onboarding@resend.dev>`,
      to: 'dianefuentes2002@gmail.com', // your own email to receive message
      subject: 'New message from portfolio contact form',
      html: `
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Resend error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

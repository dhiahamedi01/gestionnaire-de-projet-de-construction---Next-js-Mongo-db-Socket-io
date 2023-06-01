import speakeasy from 'speakeasy';
import nodemailer from 'nodemailer';

// Créez un transporteur de messagerie
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'YOUR_EMAIL',
    pass: 'YOUR_PASSWORD',
  },
});

// Générer un code OTP
const generateOTP = () => {
  const secret = speakeasy.generateSecret({ length: 20 });
  const otp = speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32',
  });
  return { secret: secret.base32, otp };
};

// Envoie le code OTP par e-mail
const sendOTPByEmail = async (email, otp) => {
  try {
    const mailOptions = {
      from: 'YOUR_EMAIL',
      to: email,
      subject: 'Code OTP',
      text: `Votre code OTP est : ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Code OTP envoyé par e-mail');
  } catch (error) {
    console.log('Une erreur s\'est produite lors de l\'envoi du code OTP par e-mail:', error);
  }
};

// Vérifier le code OTP
const verifyOTP = (otp, secret) => {
  const verified = speakeasy.totp.verify({
    secret,
    encoding: 'base32',
    token: otp,
    window: 1, // Fenêtre de tolérance d'une minute
  });
  return verified;
};

// Exemple d'utilisation
const email = 'user@example.com';

// Génération et envoi du code OTP par e-mail
const { secret, otp } = generateOTP();
sendOTPByEmail(email, otp);

// Supposons que l'utilisateur entre le code OTP reçu par e-mail dans une variable appelée `userEnteredOTP`
const userEnteredOTP = '123456';

// Vérification du code OTP
const isValidOTP = verifyOTP(userEnteredOTP, secret);

if (isValidOTP) {
  console.log('Code OTP valide');
} else {
  console.log('Code OTP invalide');
}

// const nodemailer = require('nodemailer');
// const pug = require('pug');
// const htmlToText = require('html-to-text');

// module.exports = class email {
//   constructor(user, url) {
//     this.to = user.email;
//     this.firstName = user.name.split(' ')[0];
//     this.url = url;
//     this.from = `Manav Raj <${process.env.EMAIL_FROM}>`;
//   }

//   newTransport() {
//     if (process.env.NODE_ENV === 'production') {
//       return nodemailer.createTransport({
//         host: process.env.EMAIL_HOST_SENDINBLUE,
//         port: process.env.EMAIL_PORT_SENDINBLUE,
//         auth: {
//           user: process.env.EMAIL_USERNAME_SENDINBLUE,
//           pass: process.env.EMAIL_PASSWORD_SENDINBLUE,
//         },
//       });
//     }

//     return nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: process.env.EMAIL_PORT,
//       auth: {
//         user: process.env.EMAIL_USERNAME,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });
//   }

//   async send(template, subject) {
//     const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
//       firstName: this.firstName,
//       url: this.url,
//       to: this.to,
//     });

//     const mailOptions = {
//       from: this.from,
//       to: this.to,
//       subject,
//       html,
//       text: htmlToText.fromString(html),
//     };

//     await this.newTransport().sendMail(mailOptions);
//   }

//   async sendWelcome() {
//     await this.send('welcome', 'Welcome to the Natours Family!!');
//   }

//   async sendPasswordReset() {
//     await this.send(
//       'passwordReset',
//       'Your Password Reset Token (valid for only 10 minutes).'
//     );
//   }
// };
const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

module.exports = class email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Manav Raj <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        host: process.env.EMAIL_HOST_SENDINBLUE,
        port: process.env.EMAIL_PORT_SENDINBLUE,
        auth: {
          user: process.env.EMAIL_USERNAME_SENDINBLUE,
          pass: process.env.EMAIL_PASSWORD_SENDINBLUE,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      to: this.to,
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Natours Family!!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your Password Reset Token (valid for only 10 minutes).'
    );
  }
};

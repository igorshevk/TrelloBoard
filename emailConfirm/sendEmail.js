const nodemailer = require("nodemailer");

// The credentials for the email account you want to send mail from. 
const credentials = {

  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // These environment variables will be pulled from the .env file
    user: process.env.MAIL_USER, 
    pass: process.env.MAIL_PASS  
  }
}

 const transporter = nodemailer.createTransport(credentials)

// exporting an "async" function here allows "await" to be used
// as the return value of this function.
module.exports = async (to, content) => {

  const contacts = {
    from: process.env.MAIL_USER,
    to
  }
  const email = Object.assign({}, content, contacts)
e apps in your gmail settings.
  //await transporter.sendMail(email)
  await transporter.sendMail(email, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
  }); 
}   

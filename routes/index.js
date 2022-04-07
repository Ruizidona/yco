const express = require('express');
const router = express.Router();

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

 /* 404
router.use((req, res, next) =>{
  res.status(400).render('404')
})*/

/*/ administrar
router.get('/administrar', ensureAuthenticated, (req, res) =>
  res.render('administrar', {
    user: req.user
  })
);
*/
// Credencial
router.get('/credencial', ensureAuthenticated, (req, res) =>
  res.render('credencial', {
    user: req.user
  })
);

router.get('/cursos',(req, res) =>
  res.render('cursos', {
    user: req.user
  })
);

router.get('/contacto',(req, res) =>
  res.render('contacto', {
    user: req.user
  })
);


router.get('/noticias',(req, res) =>
  res.render('noticias', {
    user: req.user
  })
);



// Admin
const User = require('../models/User');
router.get('/administrar', ensureAuthenticated, function (req, res) {
    User.find({}).exec(function(err, users) {   
        if (err) throw err;
        res.render('administrar', { "users": users });
    })
});


// CRUD

router.get('/administrar/editar/:id', ensureAuthenticated, async (req, res) => {
  const datos = await User.findById(req.params.id);
 // console.log(datos)
  res.render('edit-user', {datos});
});

router.put('/edit-user/:id', async (req, res) => {
  const { name, rol, number, country } = req.body;
  await User.findByIdAndUpdate(req.params.id, { name, rol, number, country });
  req.flash('success_msg', 'Usuario Editado');
  res.redirect('/administrar');
});

router.delete('/delete/:id', async(req, res) => {
  await User.findByIdAndDelete(req.params.id);
  req.flash('error_msg', 'Usuario Eliminado');
  res.redirect('/administrar');
});



// NODEMAILER


const nodemailer = require('nodemailer');
const { google } = require('googleapis');


router.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;


const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

async function sendMail(){
  try{
    const accessToken = await oAuth2Client.getAccessToken()
    const transporter = nodemailer.createTransport({
      service:"gmail",
      auth:{
        type:"OAuth2",
        user:"ruizwebtest@gmail.com",
        clientId:CLIENT_ID,
        clientSecret:CLIENT_SECRET,
        refreshToken:REFRESH_TOKEN,
        accessToken:accessToken
      },
    });
    const mailOptions = {
        from:"Pagina Web nodemailer <ruizwebtest@gmail.com>",
        to:"nicoelruiz@gmail.com",
        subject:"Test",
        html:contentHTML,
    };
      const result = await transporter.sendMail(mailOptions);
      return result;
  }catch (err){
    console.log(err);
  }
}
 sendMail()
  .then(result=>res.status(200).send(`<script>alert('Formulario enviado exitosamente, le responderemos lo más pronto posible.');location.href ='javascript:history.back()';</script>`))
  .catch(error=>console.log(error.message));
});



module.exports = router;

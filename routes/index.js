const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
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

// Chat
router.get('/chat', ensureAuthenticated, (req, res) =>
  res.render('chat', {
    user: req.user
  })
);

// Mapa
router.get('/mapa', ensureAuthenticated, (req, res) =>
  res.render('mapa', {
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
  const { name, rol, number } = req.body;
  await User.findByIdAndUpdate(req.params.id, { name, rol, number });
  req.flash('success_msg', 'Usuario Editado');
  res.redirect('/administrar');
});

router.delete('/delete/:id', async(req, res) => {
  await User.findByIdAndDelete(req.params.id);
  req.flash('error_msg', 'Usuario Eliminado');
  res.redirect('/administrar');
});


module.exports = router;

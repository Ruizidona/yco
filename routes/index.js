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

const User = require('../models/User');
router.get('/administrar', ensureAuthenticated, function (req, res) {
    User.find({}).exec(function(err, users) {   
        if (err) throw err;
        res.render('administrar', { "users": users });
    })
});

module.exports = router;

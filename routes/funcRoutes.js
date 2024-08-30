const express = require('express');
const router = express.Router();
const { ioconnect } = require('../controllers/funcController');

router.get('/chat', (req, res) => {
    if (req.session.user) {
        res.render('chat');
    }
    else res.render('Login');
});

module.exports = router;
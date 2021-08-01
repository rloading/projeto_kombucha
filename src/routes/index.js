const express = require('express')
const SiteController = require('../controllers/SiteController')
const router = express.Router()

/* GET home page. */
router.get('/', SiteController.homePage)

/* GET login page. */
router.get('/login', SiteController.loginPage)

/* POST do login. */
router.post('/login', SiteController.doLogin)

/* POST do login. */
router.get('/logout', SiteController.doLogout)

/* GET cadastro page. */
router.get('/cadastro', SiteController.cadastroPage)

/* POST cadastro page. */
router.post('/cadastro', SiteController.doRegister)

/* GET carrinho page. */
router.get('/carrinho', SiteController.carrinhoPage)

/* GET carrinho add. */
router.get('/carrinho/add/:id', SiteController.addToCart)

/* POST sendEmail footer. */
router.post('/sendEmail', SiteController.homePage)

/* POST compra efetuada. */

router.post('/compra', SiteController.compraEfetuada)

module.exports = router

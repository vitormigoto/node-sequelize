const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criaPessoa)
router.delete('/pessoas/:id', PessoaController.removePessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)



module.exports = router 
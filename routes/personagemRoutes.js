const express = require('express');
const router = express.Router();
const personagemController = require('../controllers/personagemController');

//Rotas CRUD
router.get('/personagens', personagemController.getAll);
router.get('/personagens/:id', personagemController.getById);
router.post('/personagens', personagemController.create);
router.put('/personagens/:id', personagemController.update);
router.delete('/personagens/:id', personagemController.remove)

module.exports = router;
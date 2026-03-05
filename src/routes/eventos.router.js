import {Router} from 'express';
import {
    listarEventos,
    criarEvento,
    atualizarEvento,
    deletarEvento
} from '../Controllers/eventos.controller.js';

const router = Router();
router.get('/',listarEventos);
router.post('/:id',criarEvento);
router.put('/:id',atualizarEvento);
router.delete('/:id',deletarEvento);

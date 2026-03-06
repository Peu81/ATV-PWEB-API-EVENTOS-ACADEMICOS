import {Router} from 'express';
import {
    ListarEventos,
    CriarEvento
} from '../Controllers/eventos.controller.js';

const router = Router();
router.get('/',ListarEventos);


export default router;
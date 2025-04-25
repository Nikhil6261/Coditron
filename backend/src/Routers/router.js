import express from 'express';
import { create ,show} from '../Control/controllers.js';  

const router = express.Router();

router.post('/create', create );

router.get('/show', show);


export default router;
import { Router } from 'express';
import { createNewWorker, getWorkers, getShiftById } from '../controllers/products.controller.js';

const router = Router();

router.get('/workers', getWorkers);

router.post('/workers', createNewWorker);

router.get('/workers/:id', getShiftById);

router.delete('/workers');

router.put('/workers');

export default router;

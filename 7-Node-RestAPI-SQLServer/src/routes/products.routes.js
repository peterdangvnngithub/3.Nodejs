import { Router } from 'express';
import {
	createNewWorker,
	getWorkers,
	getShiftById,
	getTotalShifts,
	deleteShiftById,
	updateShiftById,
} from '../controllers/products.controller.js';

const router = Router();

router.get('/workers', getWorkers);

router.post('/workers', createNewWorker);

router.get('/workers/count', getTotalShifts);

router.get('/workers/:id', getShiftById);

router.delete('/workers/:id', deleteShiftById);

router.put('/workers/:SHIFT_CODE', updateShiftById);

export default router;

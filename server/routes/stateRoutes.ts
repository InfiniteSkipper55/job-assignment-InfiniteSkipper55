import express from 'express';
import { getAllStates, getSingleState, createNewState, updateExistingState, deleteExistingState } from '../controllers/stateController';
import { isAuthenticated } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', isAuthenticated, getAllStates);
router.get('/:id', isAuthenticated, getSingleState);
router.post('/', isAuthenticated, createNewState);
router.put('/:id', isAuthenticated, updateExistingState);
router.delete('/:id', isAuthenticated, deleteExistingState);

export default router;

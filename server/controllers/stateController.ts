import { Request, Response, NextFunction } from 'express';
import State from '../models/stateModel';
import { createState, getState, getStates, updateState, deleteState } from '../services/stateService';

export const getAllStates = async (req: Request, res: Response) => {
  try {
    const states = await getStates();
    res.json(states);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getSingleState = async (req: Request, res: Response) => {
  try {
    const state = await getState(req.params.id);
    if (!state) return res.status(404).json({ message: 'State not found' });
    res.json(state);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createNewState = async (req: Request, res: Response) => {
  const { name, description, status, createdBy } = req.body;
  try {
    const newState = await createState({ name, description, status, createdBy });
    res.status(201).json(newState);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateExistingState = async (req: Request, res: Response) => {
  try {
    const updatedState = await updateState(req.params.id, req.body);
    if (!updatedState) return res.status(404).json({ message: 'State not found' });
    res.json(updatedState);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteExistingState = async (req: Request, res: Response) => {
  try {
    const state = await deleteState(req.params.id);
    if (!state) return res.status(404).json({ message: 'State not found' });
    res.json({ message: 'State deleted' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

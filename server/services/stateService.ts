import State from '../models/stateModel';

interface StateInput {
  name: string;
  description: string;
  status: string;
  createdBy: string;
}

export const getStates = async () => {
  return State.find();
};

export const getState = async (id: string) => {
  return State.findById(id);
};

export const createState = async (input: StateInput) => {
  const newState = new State(input);
  return newState.save();
};

export const updateState = async (id: string, input: Partial<StateInput>) => {
  return State.findByIdAndUpdate(id, input, { new: true });
};

export const deleteState = async (id: string) => {
  return State.findByIdAndDelete(id);
};

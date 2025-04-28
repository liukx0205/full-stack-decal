import { createStore } from 'redux';

// A simple reducer (you can replace it later with your real logic)
const initialState = {
  tasks: [],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
}

// Create the Redux store
export const store = createStore(taskReducer);

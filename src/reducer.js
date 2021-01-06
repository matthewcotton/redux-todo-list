import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
} from "./actions";
import { combineReducers } from "redux";

function visibilityFilterReducer(state = VisibilityFilters.SHOW_ALL, action) {
  return action.type === SET_VISIBILITY_FILTER ? action.filter : state;
}

function taskReducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: state.length + 1,
          description: action.text,
          completed: false,
        },
      ];
    case REMOVE_TASK:
      let filtered = state.filter((value) => action.id !== value.id);
      return filtered.map((task, i) => {
        return Object.assign({}, task, {
          id: i + 1,
        });
      });
    case TOGGLE_TASK:
      return state.map((task) => {
        return task.id === action.id
          ? Object.assign({}, task, { completed: !task.completed })
          : task;
      });
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  VisibilityFilter: visibilityFilterReducer,
  tasks: taskReducer,
});

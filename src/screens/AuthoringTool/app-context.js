/* eslint-disable no-case-declarations */
import React from "react";
import {
  SET_ALL_ROWS,
  ADD_ROW,
  UPDATE_ROW,
  DELETE_ROW,
} from "../../constants/appconstant";
import { ROWDATA } from "../../constants/rowConstant";

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

const initialState = {
  list: [...ROWDATA],
};

function AppReducer(state, action) {
  switch (action.type) {
    case SET_ALL_ROWS:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_ROW:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_ROW:
      return {
        ...state,
        list: [...state.list((l) => l.id === action.id)],
      };
    case UPDATE_ROW:
      return {
        ...state,
        list: [
          ...state.list.map((l) => {
            if (l.id === action.payload.id) l = { ...action.payload };
            return l;
          }),
        ],
      };
    default: {
      throw new Error(`caught: ${action.type}`);
    }
  }
}

// Actions
function setAllRow(dispatch, payload) {
  dispatch({ type: SET_ALL_ROWS, payload });
}

function addNewRow(dispatch, payload) {
  dispatch({ type: ADD_ROW, payload });
}

function deleteSelectedRow(dispatch, id) {
  dispatch({ type: DELETE_ROW, id });
}

function updateSelectedRow(dispatch, payload) {
  dispatch({ type: UPDATE_ROW, payload });
}

// Context hooks

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
}

function AppProvider({ children }: { children: React.Node }) {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
}

export {
  AppProvider,
  useAppState,
  useAppDispatch,
  addNewRow,
  updateSelectedRow,
  deleteSelectedRow,
  setAllRow,
};

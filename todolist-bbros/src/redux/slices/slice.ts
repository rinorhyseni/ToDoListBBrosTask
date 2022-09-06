import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { TActionSlice, TUpdateTextShowed, ITask } from '../../types';

const initialState: ITask[] = [];

export const createCustomSlice = (name: string) => {
  const {
    actions: { add, remove, completeStatus, reorder, update, updateTextShowed },
    reducer,
  } = createSlice({
    name,
    initialState,
    reducers: {
      add: {
        reducer: (state, action: PayloadAction<ITask>) => {
          state.push(action.payload);
        },
        prepare: (title: string, description: string, user: string, status: string) => ({
          payload: {
            id: uuidv4(),
            title,
            description,
            status,
            user,
            isFinished: false,
          } as ITask,
        }),
      },
      update(state, action) {
        state.splice(
          action.payload.destination.index,
          0,
          action.payload.filterState
        );
      },
      remove(state, action: PayloadAction<string>) {
        const index = state.findIndex(({ id }) => id === action.payload);
        state.splice(index, 1);
      },
      completeStatus(state, action: PayloadAction<TActionSlice>) {
        const index = state.findIndex(({ id }) => id === action.payload.id);
        state[index].isFinished = action.payload.isFinished;
      },
      updateTextShowed(state, action: PayloadAction<TUpdateTextShowed>) {
        const index = state.findIndex(({ id }) => id === action.payload.id);
      },
      reorder(state, action) {
        const [removed] = state.splice(action.payload.source.index, 1);
        state.splice(action.payload.destination.index, 0, removed);
      },
    },
  });

  return {
    actions: { add, remove, completeStatus, reorder, update, updateTextShowed },
    reducer,
  };
};
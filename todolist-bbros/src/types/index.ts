import { AnyAction } from '@reduxjs/toolkit';

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: string;
  user: string;
  isFinished: boolean;
}

export type TActionSlice = Omit<ITask, 'title'>;
export type TUpdateTextShowed = Omit<TActionSlice, 'isFinished'>;

export interface IAddTasksComponentProps {
  labelText?: string;
  addHandler: (title: string, description: string, status: string, user: string) => AnyAction;
  removeHandler: (v: string) => AnyAction;
  completedHandler: (v: TActionSlice) => AnyAction;
  selectorState: ITask[];
  droppableId: string;
  updateTextShowed: (v: TUpdateTextShowed) => AnyAction;
}
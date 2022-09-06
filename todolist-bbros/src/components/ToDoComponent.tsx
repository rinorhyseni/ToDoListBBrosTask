import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
// import { todoSlice } from '../redux/slices/todoConstantSlice';
import { StoreState } from '../redux/store';
import AddTasksComponent from './AddTasksComponent';

export function ToDoComponent() {
  // const { todo } = useSelector((state: StoreState) => state);
  // const {
  //   actions: { completeStatus, remove, add, updateTextShowed },
  // } = todoConstantSlice;

  // return (
  //   <>
  //     <Typography mb={3}>All todo tasks: {todo.length}</Typography>
  //     <AddTasksComponent
  //       droppableId='todo'
  //       labelText="Type 'to do' item"
  //       completedHandler={completeStatus}
  //       removeHandler={remove}
  //       addHandler={add}
  //       selectorState={todo}
  //       updateTextShowed={updateTextShowed}
  //     />
  //   </>
  // );
}
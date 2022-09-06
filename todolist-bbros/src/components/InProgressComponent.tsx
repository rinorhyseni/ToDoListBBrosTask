import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { inProgressConstantSlice } from '../redux/slices/inProgressConstantSlice';
import { StoreState } from '../redux/store';
import AddTasksComponent from './AddTasksComponent';

export function InProgressComponent() {
  // const { inProgress } = useSelector((state: StoreState) => state);

  // const {
  //   actions: { completeStatus, remove, add, updateTextShowed },
  // } = inProgressConstantSlice;

  // return (
  //   <>
  //     <Typography mb={3}>All inProgress tasks: {inProgress.length}</Typography>
  //     <AddTasksComponent
  //       droppableId='inProgress'
  //       labelText="Type 'in progress' item"
  //       completedHandler={completeStatus}
  //       removeHandler={remove}
  //       addHandler={add}
  //       selectorState={inProgress}
  //       updateTextShowed={updateTextShowed}
  //     />
  //   </>
  // );
}
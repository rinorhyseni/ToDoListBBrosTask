import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import actions from '../redux/action';
import { doneConstantSlice } from '../redux/slices/doneConstantSlice';
import { StoreState } from '../redux/store';
import AddTasksComponent from './AddTasksComponent';

export function DoneComponent() {
  const { tasks } = useSelector((state: StoreState) => state);
  const {
    actions: { completeStatus, remove, add, updateTextShowed },
  } = doneConstantSlice;

  return (
    <>
      <Typography mb={3}>All done tasks: </Typography>
      <AddTasksComponent
        droppableId='done'
        labelText="Type 'done' item"
        completedHandler={completeStatus}
        removeHandler={remove}
        addHandler={add}
        selectorState={tasks}
        updateTextShowed={updateTextShowed}
      />
    </>
  );
}
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { ToDoComponent } from './components/ToDoComponent';
import { DoneComponent } from './components/DoneComponent';
import { InProgressComponent } from './components/InProgressComponent';
import { todoConstantSlice as todo } from './redux/slices/todoConstantSlice';
import { inProgressConstantSlice as inProgress } from './redux/slices/inProgressConstantSlice';
import { doneConstantSlice as done } from './redux/slices/doneConstantSlice';
import { StoreState } from './redux/store';
import { ITask } from './types';

type TAllSilces = 'todo' | 'inProgress' | 'done';

function App() {
  const dispatch = useDispatch();
  const appState = useSelector((state: StoreState) => state);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const { destination, source, draggableId } = result;
    const allSlices = { todo, inProgress, done };

    if (destination.droppableId === source.droppableId) {
      dispatch(
        allSlices[destination.droppableId as TAllSilces].actions.reorder(result)
      );
    } else {
      const [filterState] = (
        (appState as any)[source.droppableId] as ITask[]
      ).filter(({ id }) => id === draggableId);

      dispatch(
        allSlices[source.droppableId as TAllSilces].actions.remove(draggableId)
      );
      dispatch(
        allSlices[destination.droppableId as TAllSilces].actions.update({
          ...result,
          filterState,
        })
      );
    }
  };

  return (
    <Container>
      <Typography textAlign='center' variant='h3' mt={3} mb={5}>
        Task Management BBros
      </Typography>{' '}
      <Grid container spacing={3} justifyContent='center'>
        <DragDropContext onDragEnd={(res) => onDragEnd(res)}>
          <Grid item md={4}>
            {/* <ToDoComponent /> */}
          </Grid>
          <Grid item md={4}>
            {/* <InProgressComponent /> */}
          </Grid>
          <Grid item md={4}>
            <DoneComponent />
          </Grid>
        </DragDropContext>
      </Grid>
    </Container>
  );
}

export default App;
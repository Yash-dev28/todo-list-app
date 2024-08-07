import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ToDoList from './ToDoList';

const onDragEnd = async (_result) => {
  // Handle reordering or moving tasks
};

const App = () => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-tasks" type="TASK">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <ToDoList listId="your-list-id" />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default App;

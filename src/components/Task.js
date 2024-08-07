import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index, listId }) => {
  return (
    <Draggable draggableId={`${listId}-${index}`} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <h5>{task.title}</h5>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <p>{task.priority}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Task;

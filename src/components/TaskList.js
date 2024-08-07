import React, { useState } from 'react';
import { db } from './firebase';
import Task from './Task';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const TaskList = ({ list, index }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: ''
  });

  const addTask = async () => {
    if (newTask.title.trim()) {
      const updatedTasks = [...list.tasks, newTask];
      await db.collection('todoLists').doc(list.id).update({ tasks: updatedTasks });
      setNewTask({ title: '', description: '', dueDate: '', priority: '' });
    }
  };

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <h4>{list.name}</h4>
          <Droppable droppableId={list.id} type="task">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.tasks.map((task, index) => (
                  <Task key={index} task={task} index={index} listId={list.id} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <input
            type="text"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            placeholder="Task Title"
          />
          <input
            type="text"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            placeholder="Task Description"
          />
          <input
            type="date"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          />
          <input
            type="text"
            value={newTask.priority}
            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            placeholder="Task Priority"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskList;

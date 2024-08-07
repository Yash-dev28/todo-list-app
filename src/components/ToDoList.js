import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';

const TodoList = ({ user }) => {
  const [todoLists, setTodoLists] = useState([]);
  const [newListName, setNewListName] = useState('');

  useEffect(() => {
    const fetchTodoLists = async () => {
      const todoListsSnapshot = await db.collection('todoLists').where('userId', '==', user.uid).get();
      const fetchedTodoLists = todoListsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTodoLists(fetchedTodoLists);
    };

    fetchTodoLists();
  }, [user]);

  const handleAddList = async () => {
    const newList = { name: newListName, userId: user.uid, tasks: [] };
    const docRef = await db.collection('todoLists').add(newList);
    setTodoLists([...todoLists, { id: docRef.id, ...newList }]);
    setNewListName('');
  };

  const handleDragEnd = result => {
    // Handle drag and drop logic
  };

  return (
    <div>
      <input
        type="text"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
        placeholder="New List Name"
      />
      <button onClick={handleAddList}>Add List</button>
      <DragDropContext onDragEnd={handleDragEnd}>
        {todoLists.map((list, index) => (
          <Droppable key={list.id} droppableId={list.id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h3>{list.name}</h3>
                {list.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} listId={list.id} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default TodoList;

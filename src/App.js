import React from 'react';
import './App.css';
import Login from './components/login';
import SignUp from './components/register';
import TodoList from './components/ToDoList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/todolist" element={<TodoList />} /> 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
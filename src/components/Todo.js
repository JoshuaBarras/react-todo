/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import uuid from 'react-uuid';
// import TodoForm from './TodoForm';

function Todo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete'
        : 'todo-row'}
      key={uuid}
    >

      <div role="presentation" key={todo.id} onKeyPress={() => completeTodo(todo.id)} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine />
        <TiEdit />
      </div>
    </div>

  ));
}

export default Todo;

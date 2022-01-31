/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';

const Todo = ({
  todos, completeTodo, removeTodo, updateTodo,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete'
        : 'todo-row'}
      key={index}
    >

      <div role="presentation" key={todo.id} onKeyPress={() => completeTodo(todo.id)} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>

  ));
};

Todo.propTypes = {
  todos: PropTypes.func,
  completeTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
};

Todo.defaultProps = {
  todos: () => {},
  completeTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
};

export default Todo;

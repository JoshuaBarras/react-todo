import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = props => {
  const [input, setInput] = useState();
  const { onSubmit, edit } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button type="submit" onClick={handleSubmit} className="todo-button edit">
            update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a Todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button type="submit" className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
  edit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: () => {},
  edit: () => {},
};

export default TodoForm;

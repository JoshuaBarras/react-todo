import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = props => {
  const [input, setInput] = useState();

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = props;

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a Todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button type="submit" className="todo-button">Add todo</button>
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: () => {},
};

export default TodoForm;

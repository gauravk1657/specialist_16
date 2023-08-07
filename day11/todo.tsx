import React from 'react';

interface TodoProps {
  title: string;
  description: string;
  status: boolean;
}

const Todo: React.FC<TodoProps> = ({ title, description, status }) => {
  return (
    <div>
      <h2 data-testid="todo-title">{title}</h2>
      <p data-testid="todo-desc">{description}</p>
      <input type="checkbox" data-testid="todo-status" checked={status} readOnly />
    </div>
  );
};

export default Todo;

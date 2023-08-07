import React, { useState } from 'react';
import Add from './Add';
import Todos from './Todos';

interface Todo {
  title: string;
  description: string;
  status: boolean;
}

const Code: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <Add addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Code;

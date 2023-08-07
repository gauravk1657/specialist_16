
  create todo app  by using  type script 
  problem  satements 


  ou have to build a Todo app with React+TS.

In the template you will find a Components Folder. There you will have the following files:-

Code.tsx
Add.tsx
Todo.tsx
Todos.tsx
Inside Add.tsx you will have a form. onSubmit of that form you have to create a new todo.

Inside the form you will have an input tag (title) and a textarea(description).

Each todo should have the following 3 properties:-

title
description
status
The first 2 properties will come from the form but the status will be false by default.

Inside the Todos.tsx file you will loop over the todo data and for each todo you will show the Todo component which is inside Todo.tsx file.

Inside the Todo Component you have:-

a h2 tag with data-testid="todo-title" where goes the title of the todo.
a p tag with data-testid="todo-desc" where goes the description of the todo.
a input:checkbox with data-testid="todo-status" which should show the status of that todo.




import React from "react";
import "./App.css";
import { Pane, Heading } from "evergreen-ui";
import InputField from "./components/InputField/InputField";
import Container from "./components/container/container";
import { TodoProps } from "./helpers/prop-types";
import TodoList from "./components/todolist/todolist";

function App() {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<TodoProps[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(todo);
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }

    console.log(todos);
  };

  return (
    <Container maxWidth={1000}>
      <Heading color="#f4f5f9" fontSize={20} textAlign="center" marginY={20}>
        Taskify
      </Heading>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        todo={todo}
        setTodo={setTodo}
      />
    </Container>
  );
}

export default App;

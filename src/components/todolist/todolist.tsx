import { Pane, minorScale } from "evergreen-ui";
import { TodoProps } from "../../helpers/prop-types";
import SingleTodo from "../single-todo/single-todo";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

function TodoList({ todo, setTodo, todos, setTodos }: Props) {
  return (
    <Pane>
      <Pane
        className="row"
        maxWidth={1000}
        margin="auto"
        // border="1px solid red"
      >
        <Pane
          className="col-12 col-md-6"
          backgroundColor="#33d69f"
          borderRadius={5}
          paddingY={minorScale(3)}
          // border="1px solid blue"
          // margin="15px"
        >
          <Pane paddingBottom={minorScale(1)} color="#f4f5f9">
            Completed
          </Pane>
          {todos.map((todo: TodoProps, i: number) => {
            return (
              <SingleTodo
                todo={todo}
                setTodo={setTodo}
                todos={todos}
                setTodos={setTodos}
                key={i}
                id={todo.id}
              />
            );
          })}
        </Pane>

        <Pane
          backgroundColor="red"
          className="col-12 col-md-6"
          borderRadius={5}
          // border="1px solid white"
          // margin="15px"
        >
          <Pane paddingY={minorScale(3)} color="#f4f5f9">
            Completed
          </Pane>
          {todos.map((todo: TodoProps, i: number) => {
            return (
              <SingleTodo
                todo={todo}
                setTodo={setTodo}
                todos={todos}
                setTodos={setTodos}
                key={i}
                id={todo.id}
              />
            );
          })}
        </Pane>
      </Pane>
    </Pane>
  );
}

export default TodoList;

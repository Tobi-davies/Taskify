import * as React from "react";
import styled from "@emotion/styled";
import { Pane, minorScale, Paragraph, TextInput } from "evergreen-ui";
import { TodoProps } from "../../helpers/prop-types";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";

const StyledInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  background-color: #f4f5f9;
  font-family: "Kumbh Sans";
`;

interface Props {
  id: number;
  todo: TodoProps;
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

function SingleTodo({ id, todo, setTodo, todos, setTodos }: Props) {
  const [edit, setEdit] = React.useState<boolean>(false);
  // const [editInput, setEditInput] = React.useState<String>(todo.todo);
  const [editInput, setEditInput] = React.useState(todo.todo);
  const [textDisplay, setTextDisplay] = React.useState<boolean>(false);

  const InputRef = React.useRef<HTMLInputElement>(null);

  const handleEdit = (todo: TodoProps) => {
    if (todo.isDone === false) {
      setEdit(!edit);
    }
    console.log(editInput);
    InputRef.current?.focus();
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    if (!edit) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
      );
    }
  };

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editInput } : todo
      )
    );

    setEdit(!edit);
  };

  return (
    <Pane
      // className="col-sm-12 col-md-6 mb-2"
      className="mb-2"
    >
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        // border="1px solid blue"
        padding={minorScale(2)}
        backgroundColor="#f4f5f9"
        borderRadius={5}
      >
        {edit && !todo.isDone ? (
          <Pane
            is="form"
            onSubmit={(e: React.FormEvent) => handleSubmit(e, todo.id)}
          >
            <StyledInput
              ref={InputRef}
              value={editInput}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditInput(e.target.value)
              }
            />
          </Pane>
        ) : (
          <Paragraph
            fontSize={16}
            color="#1f253b"
            textDecoration={todo.isDone ? "line-through" : "unset"}
            whiteSpace={!textDisplay ? "nowrap" : "unset"}
            overflow={!textDisplay ? "hidden" : "unset"}
            textOverflow={!textDisplay ? "ellipsis" : "unset"}
            onClick={() => setTextDisplay((prev) => !prev)}
          >
            {todo.todo}
          </Paragraph>
        )}
        <Pane display="flex">
          <Pane is="span" paddingX={minorScale(1)}>
            <AiFillEdit cursor="pointer" onClick={() => handleEdit(todo)} />
          </Pane>
          <Pane is="span" paddingX={minorScale(1)}>
            <AiFillDelete
              cursor="pointer"
              color="red"
              onClick={() => handleDelete(todo.id)}
            />
          </Pane>
          <Pane is="span" paddingX={minorScale(1)}>
            <FcCheckmark cursor="pointer" onClick={() => handleDone(todo.id)} />
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
}

export default SingleTodo;

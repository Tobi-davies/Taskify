import styled from "@emotion/styled";
import { Pane, TextInput } from "evergreen-ui";
import React from "react";

const StyledButton = styled.button`
  height: 40px;
  width: 50px;
  border-radius: 0 5px 5px 0;
  outline: none;
  border: none;
  position: absolute;
  right: 0;
  font-family: "Kumbh Sans", sans-serif;
  background-color: #33d69f;
  cursor: pointer;
`;

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

function InputField({ todo, setTodo, handleSubmit }: Props) {
  return (
    <Pane
      is="form"
      maxWidth={500}
      margin="auto"
      className="mb-3"
      position="relative"
      onSubmit={handleSubmit}
    >
      <TextInput
        height={40}
        borderRadius={5}
        paddingRight={50}
        width="100%"
        placeholder="Add Todo"
        value={todo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodo(e.target.value)
        }
      />
      <StyledButton type="submit">Add</StyledButton>
    </Pane>
  );
}

export default InputField;

import { ChangeEvent, useState } from "react";
import styled from "styled-components";

type InputType = {
  title: string;
  callBack: (value: string) => void
};

export const Input = (props: InputType) => {
  const [inputValue, setInputvalue] = useState<string>("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputvalue(e.currentTarget.value);
  };

  props.callBack(inputValue)

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Title>{props.title}</Title>
      <StyledInput onChange={onChangeHandler} value={inputValue} type="number"/>
    </div>
  );
};

const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
`;

const StyledInput = styled.input`
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  height: 20px;
  width: 100px;
  border-radius: 10px;
  margin-left: 20px;
  background: #333336;
  border-style: none;
  align-items: center;
  color: #fff;

  &:focus {
    outline: 2px solid #fff;
  }
`;

import { ChangeEvent } from "react";
import styled from "styled-components";

type InputType = {
  title: string;
  onChange: (value: string) => void;
  BkgColor: boolean;
  currentValue: number;
};

export const InputWithTitle = ({ title, onChange, BkgColor, currentValue }: InputType) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    onChange(newValue);
  };

  return (
    <StyledInputWithTitle>
      <Title>{title}</Title>
      <StyledInput
        type="number"
        value={currentValue}
        onChange={onChangeHandler}
        $BkgColor={BkgColor}
      />
    </StyledInputWithTitle>
  );
};

const StyledInputWithTitle = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.span`
  font-size: 28px;
  font-weight: 600;
`;

const StyledInput = styled.input<{ $BkgColor: boolean }>`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  height: 20px;
  width: 100px;
  border-radius: 10px;
  margin-left: 20px;
  background-color: ${({ $BkgColor }) => ($BkgColor ? "white" : "#d66a6a")};
  border-style: none;
  align-items: center;

  &:focus {
    outline: 3px solid ${({ $BkgColor }) => ($BkgColor ? "#333336" : "#9e3535")};
  }
`;

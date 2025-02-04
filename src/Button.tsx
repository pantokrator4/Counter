import styled from "styled-components";

type ButtonType = {
  title: string;
  callBack: () => void;
  disabled: boolean;
};

export const Button = (props: ButtonType) => {
  return <StyledButton onClick={props.callBack} disabled={props.disabled}>{props.title}</StyledButton>;
};

const StyledButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 70px;
  border-radius: 20px;
  font-size: 28px;
  font-weight: 600;
  border-style: none;
  background-color: ${({ disabled }) => (disabled ? "#64c7ca7f" : "#64c7ca")};
  &:hover {
    transform: ${({ disabled }) => (disabled ? " scale(1.0) " : "scale(1.1)")};
    transition: 0.2s ease-in-out;
  }
`;

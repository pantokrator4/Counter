import styled from "styled-components";
import { InputWithTitle } from "./InputWithTitle";

type DisplayPropsType = {
  countResult: number
  isRed: boolean
  isSetWindowOpened: boolean;
  isMaxMoreStart: boolean;
  inputStartValue: number;
  inputMaxValue: number;
  getMaxValueFromInput: (value: string) => void;
  getStartValueFromInput: (value: string) => void;
};

export const Display = ({
  countResult,
  isRed,
  isSetWindowOpened,
  isMaxMoreStart,
  getMaxValueFromInput,
  getStartValueFromInput,
  inputStartValue,
  inputMaxValue,
}: DisplayPropsType) => {
  return (
    <>
      {isSetWindowOpened ? (
        <>
          {!isMaxMoreStart ? (
            <ValueSpan $spanCol={"red"}>Incorrect Values</ValueSpan>
          ) : (
            <ValueSpan>Set a value</ValueSpan>
          )}
          <InputWithTitle
            title="set max:"
            onChange={getMaxValueFromInput}
            BkgColor={isMaxMoreStart}
            currentValue={inputMaxValue}
          />
          <InputWithTitle
            title="set start:"
            onChange={getStartValueFromInput}
            BkgColor={isMaxMoreStart}
            currentValue={inputStartValue}
          />
        </>
      ) : (
        <CountNum $isRed={isRed}>{countResult}</CountNum>
      )}
    </>
  );
};

const ValueSpan = styled.span<{$spanCol?: string}>`
  font-size: 28px;
  color: ${({$spanCol}) => $spanCol || "black"};
`

const CountNum = styled.span<{ $isRed: boolean }>`
  font-size: 100px;
  font-weight: 600;
  color: ${({ $isRed }) => ($isRed ? "#b22222" : "#333336")};
`;

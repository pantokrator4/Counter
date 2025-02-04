import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import styled from "styled-components";
import "./App.css";

export const Counter = () => {
  const [countResult, setCountResult] = useState<number>(0);
  const [isSetWindowOpened, setisSetWindowOpened] = useState<boolean>(false);
  const [valueFromInput, setValueFromInput] = useState<number>(0)
  const isBtnRed = countResult > 9;
  const isCountEmpty = countResult <= 0;

  useEffect(() => {
    let valueAsString = localStorage.getItem("counterKey");
    if (valueAsString) {
      setCountResult(JSON.parse(valueAsString));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counterKey", JSON.stringify(countResult));
  }, [countResult]);

  const increment = () => {
    setCountResult(countResult + 1);
  };
  const reset = () => {
    setCountResult(0);
  };

  const getValue = (value: string) => {
    setValueFromInput(Number(value))
  }

  const setStartValue = () => {
    setCountResult(valueFromInput)
  };

  const changeSetStatus = () => {
    setisSetWindowOpened(!isSetWindowOpened);
  };

  return (
    <StyledCounter>
      <CounterDisplay>
        {isSetWindowOpened ? (
          <>
            <Input title="set max:" callBack={()=>{}} />
            <Input title="set start:" callBack={getValue} />
          </>
        ) : (
          <CountNum isBtnRed={isBtnRed}>{countResult}</CountNum>
        )}
      </CounterDisplay>
      <ButtonWrapper>
        {isSetWindowOpened ? (
          <>
            <Button title="set" callBack={setStartValue} disabled={false} />
            <Button title="back" callBack={changeSetStatus} disabled={false} />
          </>
        ) : (
          <>
            <Button title="inc" callBack={increment} disabled={isBtnRed} />
            <Button title="res" callBack={reset} disabled={isCountEmpty} />
            <Button title="set" callBack={changeSetStatus} disabled={false} />
          </>
        )}
      </ButtonWrapper>
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 400px;
  height: 400px;
  border: 2px solid #64c7ca;
  margin: 50px auto;
  padding: 0;
  border-radius: 20px;
`;

const CountNum = styled.span<{ isBtnRed: boolean }>`
  font-size: 100px;
  font-weight: 600;
  color: ${({ isBtnRed }) => (isBtnRed ? "#b22222" : "#333336")};
`;

const CounterDisplay = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  margin: 10px 10px;
  height: 60%;
  background-color: #64c7ca;
  border-radius: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px;
  width: 380px;
  height: 30%;
  border: 2px solid #64c7ca;
  border-radius: 20px;
`;

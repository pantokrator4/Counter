import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import styled from "styled-components";
import "./App.css";

const regex = /^\d*$/;

export const Counter = () => {
  const [countResult, setCountResult] = useState(0);
  const [isSetWindowOpened, setisSetWindowOpened] = useState(false);
  const [inputStartValue, setInputStartValue] = useState(0);
  const [inputMaxValue, setInputMaxValue] = useState(10);

  const isRed = countResult >= inputMaxValue;
  const isCountEmpty = countResult <= inputStartValue;
  const isMaxMoreStart =
    inputMaxValue > inputStartValue &&
    inputMaxValue >= 0 &&
    inputStartValue >= 0;
  console.log(inputMaxValue);
  useEffect(() => {
    const valueAsString = localStorage.getItem("counterKey");
    let localInputStartValue = localStorage.getItem("localInputStartValue");
    let localInputMaxValue = localStorage.getItem("localInputMaxValue");

    if (valueAsString) {
      setCountResult(JSON.parse(valueAsString));
    }
    if (localInputStartValue) {
      setInputStartValue(JSON.parse(localInputStartValue));
    }
    if (localInputMaxValue) {
      setInputMaxValue(JSON.parse(localInputMaxValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counterKey", JSON.stringify(countResult));
    localStorage.setItem(
      "localInputStartValue",
      JSON.stringify(inputStartValue)
    );
    localStorage.setItem("localInputMaxValue", JSON.stringify(inputMaxValue));
  }, [countResult, inputStartValue, inputMaxValue]);

  const increment = () => {
    setCountResult((prev) => prev + 1);
  };
  const reset = () => {
    setCountResult(inputStartValue);
  };

  const getStartValueFromInput = (value: string) => {
    if (regex.test(value)) {
      setInputStartValue(Number(value));
    }
  };

  const getMaxValueFromInput = (value: string) => {
    if (regex.test(value)) {
      setInputMaxValue(Number(value));
    }
  };

  const setStartValue = () => {
    setCountResult(inputStartValue);
    setisSetWindowOpened(!isSetWindowOpened);
  };

  const changeSetStatus = () => {
    setisSetWindowOpened(!isSetWindowOpened);
  };

  return (
    <StyledCounter>
      <StyledDisplay>
        <Display
          countResult={countResult}
          isRed={isRed}
          isSetWindowOpened={isSetWindowOpened}
          isMaxMoreStart={isMaxMoreStart}
          inputStartValue={inputStartValue}
          inputMaxValue={inputMaxValue}
          getMaxValueFromInput={getMaxValueFromInput}
          getStartValueFromInput={getStartValueFromInput}
        />
      </StyledDisplay>
      <ButtonWrapper>
        {isSetWindowOpened ? (
          <>
            <Button
              title="set"
              callBack={setStartValue}
              disabled={!isMaxMoreStart}
            />
          </>
        ) : (
          <>
            <Button title="inc" callBack={increment} disabled={isRed} />
            <Button title="res" callBack={reset} disabled={isCountEmpty} />
            <Button title="set" callBack={changeSetStatus} />
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

const StyledDisplay = styled.div`
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

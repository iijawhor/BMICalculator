import React, { useState, useMemo, useRef } from "react";
function BmiCalculator() {
  const inputWeight = useRef(40);
  const inputHeight = useRef(140);
  console.log(inputHeight);
  console.log(inputWeight);
  //   const defaultWeight = 40;
  //   const defaultHeight = 140;
  const [weight, setWeight] = useState(inputWeight.current);
  const [height, setHeight] = useState(inputHeight.current);

  const onWeightChange = (e) => {
    const newWeight = parseInt(inputWeight.current.value);
    setWeight(newWeight);
  };
  const onHeightChange = (e) => {
    const newHeight = parseInt(inputHeight.current.value);
    setHeight(newHeight);
  };
  const output = useMemo(() => {
    const calcultedHeight = height / 100;
    return (weight / (calcultedHeight * calcultedHeight)).toFixed(1);
  }, [height, weight]);

  return (
    <>
      <div className="container">
        <h2>BMI Calculator</h2>
        <div className="inputs">
          <input
            type="range"
            min="40"
            max="220"
            onChange={onWeightChange}
            ref={inputWeight}
          />
          <p>Weight{weight}</p>
          <input
            type="range"
            min="140"
            max="220"
            onChange={onHeightChange}
            ref={inputHeight}
          />
          <p>Height{height}</p>
        </div>
        <h1>Your BMI is : {output}</h1>
      </div>
    </>
  );
}

export default BmiCalculator;

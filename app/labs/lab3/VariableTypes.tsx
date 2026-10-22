export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  const secondString = "I'm the second string!";
  const secondNumber = 23456;
  const isSecondString = typeof secondString;
  const isSecondNumber = typeof secondNumber;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;

  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      secondString = {secondString}
      <br />
      secondNumber = {secondNumber}
      <br />
      isSecondString = {isSecondString}
      <br />
      isSecondNumber = {isSecondNumber}
      <br />
      sampleCount = {sampleCount}
      <br />
      isSampleCount = {isSampleCount}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      isSampleLabel = {isSampleLabel}
      <hr />
    </div>
  );
}
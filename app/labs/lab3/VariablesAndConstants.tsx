export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let test1 = 30;
  const hello1 = test1 + blockScoped + functionScoped;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      test1 = {test1}
      <br /> 
      hello1 = {hello1}
      <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
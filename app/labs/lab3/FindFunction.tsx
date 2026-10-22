export default function FindFunction() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2", "string3"];
  const four = numberArray1.find((a) => a === 4);
  const string3 = stringArray1.find((a) => a === "string3");
  const two = numberArray1.find((a) => a === 2);
  const string18 = stringArray1.find((a) => a === "string18");
  return (
    <div id="wd-find-function">
      <h4>Find Function</h4>
      four = {four}
      <br />
      string3 = {string3}
      <br />
      two = {two}
      <br />
      string18 = {String(string18)}
      <hr />
    </div>
  );
}
export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        Sample paragraph with blue foreground color and{" "}
        <span className="wd-fg-color-black">black nested span</span>
      </p>
      <p className="wd-fg-color-slime">
        This text is olive green but{" "}
        <span className="wd-fg-color-poop">this text is brown.</span>
      </p>
    </div>
  );
}
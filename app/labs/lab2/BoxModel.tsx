export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h2>Box model</h2>
      <div className="wd-box-model-parent">
        <div>parent background (shows through the margin)</div>
        <div className="wd-box-model-box">
          <span className="wd-box-model-border-label">border (the red ring)</span>
          <span className="wd-box-model-padding-label">padding</span>
          <div className="wd-box-model-content">content</div>
          <span className="wd-box-model-margin-label">
            margin: the 20px gray gap (transparent)
          </span>
        </div>
      </div>
      <h3>box-sizing</h3>
      <div className="wd-box-sizing-demo">
        <div className="wd-box-sizing-content">
          content-box: width 240px plus padding and border
        </div>
        <div className="wd-box-sizing-border">
          border-box: width 240px includes padding and border
        </div>
        <div className="wd-box-sizing-border" style={{ backgroundColor: "#90ee90" }}>
          border-box: declared width 240px stays 240px (padding/border inside)
        </div>
      </div>
    </div>
  );
}
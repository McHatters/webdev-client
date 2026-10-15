import "./index.css";

export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <h2>My Flex Row</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-red ">Column 1</div>
        <div className="wd-bg-color-yellow wd-flex-grow-1 wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-width-75px">
          Column 3
        </div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-width-75px wd-bg-color-yellow">Fixed 75px</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Auto</div>
        <div className="wd-flex-grow-1 wd-bg-color-green wd-fg-color-white">Grows (flex-grow: 1)</div>
      </div>
    </div>
  );
}
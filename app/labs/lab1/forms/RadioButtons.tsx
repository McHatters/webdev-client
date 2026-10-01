export default function RadioButtons() {
  return (
    <>
      <h5 id="wd-radio-buttons">Radio buttons</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-comedy" />
      <label htmlFor="wd-radio-comedy">Comedy</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-drama" />
      <label htmlFor="wd-radio-drama">Drama</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-scifi" />
      <label htmlFor="wd-radio-scifi">Science Fiction</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
      <label htmlFor="wd-radio-fantasy">Fantasy</label>


      <h5>Sibling label + htmlFor</h5>
      <input type="radio" name="radio-beside" id="wd-radio-beside-yes" />
      <label htmlFor="wd-radio-beside-yes">Yes</label>
      <input type="radio" name="radio-beside" id="wd-radio-beside-no" />
      <label htmlFor="wd-radio-beside-no">No</label>

      <h5>Wrapping label — no htmlFor needed</h5>
      <label>
        <input type="radio" name="radio-wrap" /> Yes
        <input type="radio" name="radio-wrap" /> No
      </label>

      <h5>Separate placement still works with htmlFor</h5>
      <label htmlFor="wd-radio-distant-a">Option A</label>
      <input type="radio" name="radio-distant" id="wd-radio-distant-a" />
      <label htmlFor="wd-radio-distant-b">Option B</label>
      <input type="radio" name="radio-distant" id="wd-radio-distant-b" />

    </>
  );
}
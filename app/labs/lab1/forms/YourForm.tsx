export default function YourForm() {
    return (
        <div id="wd-your-forms">
            <h4>Student Profile</h4>
            <form
                id="wd-your-form"
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >

                <label htmlFor="wd-text-fields-your-first-name">First Name:</label>
                <input placeholder="Caolan" id="wd-text-fields-your-first-name" /> <br />
                <label htmlFor="wd-text-fields-your-last-name">Last Name:</label>
                <input placeholder="Disini" id="wd-text-fields-your-last-name" /> <br />
                <label htmlFor="wd-text-fields-your-password">Password:</label>
                <input
                    type="password"
                    defaultValue="hunter2"
                    id="wd-text-fields-your-password"
                />
                <br />

                <h5>Text boxes</h5>
                <label>Biography:</label>
                <br />
                <textarea
                    id="wd-your-textarea"
                    cols={30}
                    rows={10}
                    defaultValue="My name is Caolan Disini, a Master's student at Northeastern University. I am taking this class to be able to build websites. "
                />

                <br />
                <h5>Radio buttons</h5>
                <label>Current Class Standing:</label>
                <br />
                <input type="radio" name="radio-standing" id="wd-radio-freshman" />
                <label htmlFor="wd-radio-freshman">Freshman</label>
                <br />
                <input type="radio" name="radio-standing" id="wd-radio-sophomore" />
                <label htmlFor="wd-radio-sophomore">Sophomore</label>
                <br />
                <input type="radio" name="radio-standing" id="wd-radio-junior" />
                <label htmlFor="wd-radio-junior">Junior</label>
                <br />
                <input type="radio" name="radio-standing" id="wd-radio-senior" />
                <label htmlFor="wd-radio-senior">Senior</label>

                <br />
                <label>On or Off Campus:</label>
                <br />
                <input type="radio" name="radio-campus" id="wd-radio-on-campus" />
                <label htmlFor="wd-radio-on-campus">On Campus</label>
                <br />
                <input type="radio" name="radio-campus" id="wd-radio-off-campus" />
                <label htmlFor="wd-radio-off-campus">Off Campus</label>

                <br />
                <h5>Checkboxes</h5>
                <label>Clubs:</label>
                <br />
                <input type="checkbox" name="checkbox-clubs" id="wd-checkbox-club1" />
                <label htmlFor="wd-checkbox-club1">Board Game Club</label>
                <br />
                <input type="checkbox" name="checkbox-clubs" id="wd-checkbox-club2" />
                <label htmlFor="wd-checkbox-club2">Game Development Club</label>
                <br />
                <input type="checkbox" name="checkbox-clubs" id="wd-checkbox-club3" />
                <label htmlFor="wd-checkbox-club3">NU Launch Labs</label>

                <br />
                <h5>Dropdowns</h5>
                <label htmlFor="wd-dropdown-major">Major:</label>
                <select id="wd-dropdown-major" defaultValue="Computer Science">
                    <option value="Computer Science">Computer Science</option>
                    <option value="Business">Business</option>
                    <option value="Psychology">Psychology</option>
                </select>

                <h5>Topics to deepen this term:</h5>
                <label htmlFor="wd-select-many-topics">Topics: </label>
                <br />
                <select
                    multiple
                    id="wd-select-many-topics"
                    defaultValue={["Networks", "NLP"]}
                >
                    <option value="Networks">Networks</option>
                    <option value="NLP">Natural Language Processing</option>
                    <option value="AI">Artificial Intelligence</option>
                    <option value="Webdev">Web Development</option>
                </select>

                <br />
                <h5>Typed Fields</h5>
                <label htmlFor="wd-typed-field-email">Email:</label>
                <input 
                    type="email" 
                    placeholder="disini.c@northeastern.edu"
                    id="wd-typed-field-email" />
                <br />
                <label htmlFor="wd-typed-field-graduation-year">Graduation Year:</label>
                <input
                    type="number"
                    defaultValue="2026"
                    placeholder="2026"
                    min={2026}
                    max={2030}
                    id="wd-typed-field-graduation-year"
                />
                <br />
                <label htmlFor="wd-typed-field-birthday">Birthday:</label>
                <input
                    type="date"
                    id="wd-typed-field-birthday"
                    defaultValue="1997-03-06"
                />
                <br />
                <label htmlFor="wd-typed-field-rating">How excited I am for the course:</label>
                <input
                    type="range"
                    defaultValue="5"
                    min="0"
                    max="10"
                    id="wd-typed-field-rating"
                />
                <br />
                <button id="wd-button-save" type="submit">Save</button>
                <button id="wd-button-reset" type="button">Reset</button>

            </form>
        </div>
    );
}
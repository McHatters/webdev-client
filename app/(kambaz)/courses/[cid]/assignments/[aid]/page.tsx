import Link from "next/link";
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" />
            <br />
            <br />
            <textarea id="wd-description" defaultValue="The assignment is available online Submit a link to the landing page of your website. The landing page should have a navigation bar with links to the other pages of your website. The landing page should also have a footer with your name and the date." />
            <br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" defaultValue={100} />
                        </td>
                    </tr>
                    <br />

                    <label htmlFor="wd-group">Assignment Group</label> {" "}

                    <select defaultValue="ASSIGNMENTS" id="wd-group">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECT">PROJECT</option>
                    </select>
                    <br />
                    <label htmlFor="wd-display-grade-as">Display Grade as</label> {" "}

                    <select defaultValue="Percentage" id="wd-display-grade-as">
                        <option value="Percentage">Percentage</option>
                        <option value="Points">Points</option>
                    </select>
                    <br />
                    <label htmlFor="wd-submission-type">Submission Type</label>
                    <select id="wd-submission-type" defaultValue="Online">
                        <option value="Online">Online</option>
                        <option value="On Paper">On Paper</option>
                    </select>

                    <br />

                    <label>Online Entry Options</label>
                    <br />
                    <label>
                        <input type="checkbox" id="wd-text-entry" /> Text Entry
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" id="wd-website-url" /> Website URL
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" id="wd-media-recordings" /> Media Recordings
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" id="wd-student-annotation" /> Student Annotation
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" id="wd-file-upload" /> File Uploads
                    </label>
                    <br />

                    <label htmlFor="wd-assign-to">Assign to:</label>
                    <input placeholder="Everyone" id="wd-assign-to" /> <br />
                    <label htmlFor="wd-due-date">Due</label>
                    <input
                        type="date"
                        id="wd-due-date"
                        defaultValue="2026-09-30" /> <br />


                    <label htmlFor="wd-available-from">Available from</label>

                    <input
                        type="date"
                        id="wd-available-from"
                        defaultValue="2026-09-30" /> <br />

                    <label htmlFor="wd-available-until">Until</label>

                    <input
                        type="date"
                        id="wd-available-until" />

                    <br />
                    <Link href={`/courses/1234/assignments/`} id="wd-cancel"><button type="button">Cancel</button></Link>
                    <Link href={`/courses/1234/assignments/`} id="wd-save"><button type="submit">Save</button></Link>

                </tbody>
            </table>
        </div>
    );
}
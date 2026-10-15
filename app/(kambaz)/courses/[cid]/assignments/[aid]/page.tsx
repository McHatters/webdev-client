import Link from "next/link";
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="min-w-0 w-5xl">
            <div className="ml-3">
                <label htmlFor="wd-name" className="mb-2 flex flex-wrap items-center justify-between gap-2">Assignment Name</label>
                <input
                    id="wd-name"
                    defaultValue="A1 - ENV + HTML"
                    className="rounded border w-full my-2 py-1.5 pr-3 pl-3 text-base text-gray-800" />
                <textarea
                    id="wd-description"
                    className="w-full my-4 h-48 rounded-lg border px-4 py-3 resize-y text-gray-800 text-base"
                    defaultValue="The assignment is available online. Submit a link to the landing page of your website. The landing page should have a navigation bar with links to the other pages of your website. The landing page should also have a footer with your name and the date." />
                <label htmlFor="wd-ai-editor-notes" className="mb-2 flex flex-wrap items-center justify-between gap-2">Sample notes</label>
                <textarea
                    id="wd-ai-editor-notes"
                    className="w-full my-4 h-48 rounded-lg border px-4 py-3 resize-y text-gray-800 text-base"
                    defaultValue="AI-generated sample notes field" />
            </div>

            <table className="w-full table-fixed border-spacing-y-3">
                <tbody className="block-auto">
                    <tr>
                        <td className="items-end flex-1 text-right align-top font-semibold pr-4">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input
                                id="wd-points"
                                defaultValue={100}
                                className="rounded border w-full py-1.5 pr-3 pl-3 text-base" />
                        </td>
                    </tr>
                    <tr>
                        <td className="items-end flex-1 text-right align-top font-semibold pr-4">
                            <label htmlFor="wd-group">
                                Assignment Group</label> {" "}
                        </td>
                        <td>
                            <select
                                defaultValue="ASSIGNMENTS"
                                id="wd-group"
                                className="rounded border w-full py-1.5 pr-3 pl-3 bg-white text-base">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="className=items-end flex-1 text-right align-top font-semibold pr-4">
                            <label htmlFor="wd-display-grade-as">
                                Display Grade as</label> {" "}
                        </td>
                        <td>
                            <select
                                defaultValue="Percentage"
                                id="wd-display-grade-as"
                                className="rounded border w-full py-1.5 pr-3 pl-3 bg-white text-base">
                                <option value="Percentage">Percentage</option>
                                <option value="Points">Points</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="items-end flex-1 text-right align-top font-semibold pr-4">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <div className="rounded border p-4 border-gray-400">
                                <select
                                    id="wd-submission-type"
                                    defaultValue="Online"
                                    className="rounded border w-full mb-4 py-1.5 pr-3 pl-3 bg-white text-base">
                                    <option value="Online">Online</option>
                                    <option value="On Paper">On Paper</option>
                                </select>

                                <label className="font-bold p-2">Online Entry Options</label>
                                <label className="block pr-4 m-2">
                                    <input type="checkbox"
                                        id="wd-text-entry"
                                        className="m-2 w-4 h-4" />
                                    Text Entry
                                </label>
                                <label className="block pr-4 m-2">
                                    <input type="checkbox"
                                        id="wd-website-url"
                                        className="m-2 w-4 h-4" />
                                    Website URL
                                </label>
                                <label className="block pr-4 m-2">
                                    <input type="checkbox"
                                        id="wd-media-recordings"
                                        className="m-2 w-4 h-4" />Media Recordings
                                </label>
                                <label className="block pr-4 m-2">
                                    <input
                                        type="checkbox"
                                        id="wd-student-annotation"
                                        className="m-2 w-4 h-4" /> Student Annotation
                                </label>
                                <label className="block pr-4 m-2">
                                    <input type="checkbox"
                                        id="wd-file-upload"
                                        className="m-2 w-4 h-4" /> File Uploads
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="items-end flex-1 text-right align-top font-semibold pr-4">
                            <label htmlFor="wd-assign-to">Assign</label>
                        </td>
                        <td>
                            <div className="rounded border p-4 border-gray-400">
                                <label className="font-bold p-2">Assign to</label>
                                <input
                                    placeholder="Everyone"
                                    id="wd-assign-to"
                                    className="rounded border w-full py-1.5 pr-3 pl-3 my-2 text-base text-gray-800" />
                                <label htmlFor="wd-due-date" className="font-bold p-2">Due</label>
                                <input
                                    type="date"
                                    id="wd-due-date"
                                    defaultValue="2026-09-30"
                                    className="rounded border w-full py-1.5 pr-3 pl-3 my-2 text-base text-gray-800" />

                                <div className="flex gap-2 my-2">
                                    <div>
                                        <label htmlFor="wd-available-from" className="font-bold p-2">Available from</label>
                                        <input
                                            type="date"
                                            id="wd-available-from"
                                            defaultValue="2026-09-30"
                                            className="rounded border w-full my-2 py-1.5 pr-3 pl-3 text-base text-gray-800" />
                                    </div>
                                    <div>
                                        <label htmlFor="wd-available-until" className="font-bold p-2">Until</label>
                                        <input
                                            type="date"
                                            id="wd-available-until"
                                            className="rounded border w-full my-2 py-1.5 pr-3 pl-3 text-base text-gray-800" />
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-end gap-1">
                <Link href={`/courses/1234/assignments/`}
                    id="wd-cancel"
                    className="align-end">
                    <button
                        type="button"
                        className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm">Cancel</button>
                </Link>
                <Link href={`/courses/1234/assignments/`} id="wd-save">
                    <button
                        type="submit"
                        className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                    >Save</button>
                </Link>
            </div>
        </div>
    );
}
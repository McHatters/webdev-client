"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
    useAssignmentsStore,
    type Assignment,
} from "../../../../store/assignmentsStore";

const newAssignment: Omit<Assignment, "_id"> = {
    title: "New Assignment",
    course: "",
    description: "New Assignment Description",
    points: 100,
    due: "",
    available: "",
    until: "",
};

export default function AssignmentEditor() {
    const { cid, aid } = useParams<{ cid: string; aid: string }>();
    const router = useRouter();
    const isNew = aid === "new";
    const existing = useAssignmentsStore((state) => state.findAssignment(aid));

    const found = existing?.course === cid ? existing : undefined;
    const addAssignment = useAssignmentsStore((state) => state.addAssignment);
    const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
    const [assignment, setAssignment] = useState<Omit<Assignment, "_id">>(
        found ?? { ...newAssignment, course: cid },
    );
    const listPath = `/courses/${cid}/assignments`;

    const save = () => {
        if (isNew) {
            addAssignment({ ...assignment, course: cid });
        } else {
            updateAssignment({ ...assignment, _id: aid, course: cid });
        }
        router.push(listPath);
    };

    if (!isNew && !found) {
        return (
            <div id="wd-assignments-editor">
                <p>Assignment not found in this course.</p>
                <Link href={listPath}>Back to Assignments</Link>
            </div>
        );
    }

    return (
        <div id="wd-assignments-editor" className="min-w-0 w-5xl">
            <div className="ml-3">
                <label htmlFor="wd-name" className="mb-2 flex flex-wrap items-center justify-between gap-2">Assignment Name</label>
                <input
                    id="wd-name"
                    value={assignment.title}
                    onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                    className="rounded border w-full my-2 py-1.5 pr-3 pl-3 text-base text-gray-800" />
                <div className="my-2 text-sm text-neutral-500">Assignment id: {aid}</div>
                <textarea
                    id="wd-description"
                    className="w-full my-4 h-48 rounded-lg border px-4 py-3 resize-y text-gray-800 text-base"
                    value={assignment.description}
                    onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
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
                                type="number"
                                value={assignment.points}
                                onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
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
                                    value={assignment.due}
                                    onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                                    className="rounded border w-full py-1.5 pr-3 pl-3 my-2 text-base text-gray-800" />

                                <div className="flex gap-2 my-2">
                                    <div>
                                        <label htmlFor="wd-available-from" className="font-bold p-2">Available from</label>
                                        <input
                                            type="date"
                                            id="wd-available-from"
                                            value={assignment.available}
                                            onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
                                            className="rounded border w-full my-2 py-1.5 pr-3 pl-3 text-base text-gray-800" />
                                    </div>
                                    <div>
                                        <label htmlFor="wd-available-until" className="font-bold p-2">Until</label>
                                        <input
                                            type="date"
                                            id="wd-available-until"
                                            value={assignment.until ?? ""}
                                            onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
                                            className="rounded border w-full my-2 py-1.5 pr-3 pl-3 text-base text-gray-800" />
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-end gap-1">
                <button
                    type="button"
                    id="wd-cancel"
                    onClick={() => router.push(listPath)}
                    className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm">Cancel</button>
                <button
                    type="button"
                    id="wd-save"
                    onClick={save}
                    className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                >Save</button>
            </div>
        </div>
    );
}
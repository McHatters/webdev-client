import { FaCheckCircle, FaFlask } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { TbFileImport, TbPackageImport, TbHomeMove, TbFreezeColumn, TbSpeakerphone, TbFileAnalytics, TbBell } from "react-icons/tb";

export default function CourseStatus() {
    return (
        <div id="wd-course-status">
            <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
            <div className="mb-1 flex gap-1">
                <button
                    type="button"
                    className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
                >
                    <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
                </button>
                <button
                    type="button"
                    className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
                >
                    <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
                </button>
            </div>
            <button
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <TbFileImport className="me-1 shrink"/> Import Existing Content
            </button>
            <button
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <TbPackageImport className="me-1 shrink"/> Import from Commons
            </button>
            <button
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <TbHomeMove className="me-1 shrink"/> Choose Home Page
            </button>
            <button
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <TbFreezeColumn className="me-1 shrink"/> View Course Stream
            </button>
            <button
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <TbSpeakerphone className="me-1 shrink"/> New Announcement
            </button>
            <button
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <TbFileAnalytics className="me-1 shrink"/> New Analytics
            </button>
            <button
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <TbBell className="me-1 shrink"/> View Course Notifications
            </button>
            <button
                id="wd-ai-status"
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <FaFlask className="me-1 shrink"/> Sample action
            </button>
        </div>
    );
}
"use client";

const hello = () => {
    alert("Hello World!");
};

const greeting = () => {
    alert("Hello, my name is Caolan Disini!");
}

const goodbye = () => {
    alert("Goodbye World!");
}


export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>
            <button
                type="button"
                onClick={hello}
                id="wd-onclick-hello"
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white m-1.5"
            >
                Click Hello
            </button>
            <button
                type="button"
                onClick={goodbye}
                id="wd-onclick-goodbye"
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white m-1.5">
                Click Goodbye
            </button>
            <button
                type="button"
                onClick={greeting}
                id="wd-onclick-greeting"
                className="rounded bg-blue-500 px-3 py-1.5 text-sm font-medium text-white m-1.5">
                Click Greeting
            </button>
            <hr />
        </div>
    );
}
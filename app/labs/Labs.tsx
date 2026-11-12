import "@/app/labs/lab2/tailwind/utilities.css";
import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/labs/lab1" className="text-lg font-semibold">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2" className="text-lg font-semibold">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3" className="text-lg font-semibold">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link" className="text-lg font-semibold">
            Lab 4: Client State
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5" id="wd-lab5-link" className="text-lg font-semibold">
            Lab 5: Placeholder
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link" className="text-lg font-semibold">
            Kambaz Homepage
          </Link>
        </li>
      </ul>
    </div>
  );
}
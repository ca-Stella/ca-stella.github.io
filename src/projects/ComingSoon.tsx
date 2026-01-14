import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-5xl p-10 flex flex-col gap-5 items-start justify-center space-y-6 text-base text-gray-700 leading-relaxed">
        <h1 className="text-5xl sm:text-4xl wrap-break-words">
          🚧 Details coming soon...
        </h1>
        {/* <Link to="/#projects" className="text-amber-700 hover:underline">
          ← Back to Projects
        </Link> */}
      </div>
    </div>
  );
}

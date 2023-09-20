import { Link } from "react-router-dom";
import { GithubIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="border-t border-slate-50/[0.06] bg-[#121212] text-zinc-700 flex flex-col justify-center items-center gap-6 p-4 text-sm lg:text-base">
      <Link
        to="/credits"
        className="underline underline-offset-4 hocus:text-zinc-400 transition-colors text-sm"
      >
        Credits
      </Link>
      <div className="flex justify-center items-center gap-4 text-zinc-500">
        <p className="space-x-2">
          <span>&copy; {new Date().getFullYear()}</span>{" "}
          <span>Felix Perez</span>
        </p>
        <a
          href="https://github.com/felix-scl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="w-4 h-4 hocus:text-zinc-400 transition-colors" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;


import { FaMailBulk } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

export default function ShareLinks() {
  return (
    <ul className="flex flex-wrap gap-5 text-white lg:flex-nowrap">
      <li className="group cursor-pointer rounded-full bg-primary-accent p-4">
        <span className="sr-only">Share on Facebook</span>
        <a>
          <FaFacebookF className="size-4 transition-colors group-hover:text-blue-600" />
        </a>
      </li>
      <li className="group cursor-pointer rounded-full bg-primary-accent p-4">
        <span className="sr-only">Share on Twitter</span>
        <a>
          <FaTwitter className="size-4 transition-colors group-hover:text-blue-400" />
        </a>
      </li>
      <li className="group cursor-pointer rounded-full bg-primary-accent p-4">
        <span className="sr-only">Share on LinkedIn</span>
        <a>
          <FaLinkedinIn className="size-4 transition-colors group-hover:text-rose-400" />
        </a>
      </li>
      <li className="group cursor-pointer rounded-full bg-primary-accent p-4">
        <span className="sr-only">Share on Pinterest</span>
        <a>
          <FaPinterest className="size-4 transition-colors group-hover:text-violet-400" />
        </a>
      </li>
      <li className="group cursor-pointer rounded-full bg-primary-accent p-4">
        <span className="sr-only">Share via Email</span>
        <a>
          <FaMailBulk className="size-4 transition-colors group-hover:text-yellow-400" />
        </a>
      </li>
    </ul>
  );
}

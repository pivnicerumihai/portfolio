"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "./navbar.css";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-primary pt-6">
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-accent border-accent hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <ul className="flex justify-evenly text-lg text-secondary">
              <li>
                <Link href="/">
                  <span className='nav_button' data-replace="&nbsp;&nbsp;&nbsp;&darr;">Home
                  <br/>
                    <br/></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className='nav_button' data-replace="&nbsp;&nbsp;&nbsp;&nbsp;&darr;">
                    Projects
                    <br/>
                    <br/>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className='nav_button' data-replace="&nbsp;&nbsp;&nbsp;&nbsp;&darr;">Contact
                  <br/>
                    <br/></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

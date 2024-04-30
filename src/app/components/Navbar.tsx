"use client";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-screen flex flex-row fixed z-40 bg-gradient-to-b from-black to-teal-900">
			<Link className=" ml-20 my-4 text-3xl text-gray-100" href="#about">
				Eduardo Miranda
			</Link>
			<ul className="absolute right-0 text-lg mr-32 my-5 flex flex-row gap-8 text-gray-400">
				<li>
					<Link
						className="hover:text-gray-50 duration-300"
						href="#about"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						className="hover:text-gray-50 duration-300"
						href="#skills"
					>
						Skills
					</Link>
				</li>
				<li>
					<Link
						className="hover:text-gray-50 duration-300"
						href="#education"
					>
						Education
					</Link>
				</li>
				<li>
					<Link
						className="hover:text-gray-50 duration-300"
						href="#projects"
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						className="hover:text-gray-50 duration-300"
						href="#contact"
					>
						Contact me
					</Link>
				</li>
			</ul>
		</nav>
	);
}

"use client";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
	return (
		<nav className="w-screen flex flex-row fixed z-40 bg-gradient-to-b from-black to-teal-900">
			<HashLink
				className=" ml-20 my-4 text-3xl text-gray-100"
				to="#about"
			>
				Eduardo Miranda
			</HashLink>
			<ul className="absolute right-0 text-lg mr-32 my-5 flex flex-row gap-8 text-gray-400">
				<li>
					<HashLink
						className="hover:text-gray-50 duration-300"
						to="#about"
					>
						About
					</HashLink>
				</li>
				<li>
					<HashLink
						className="hover:text-gray-50 duration-300"
						to="#skills"
					>
						Skills
					</HashLink>
				</li>
				<li>
					<HashLink
						className="hover:text-gray-50 duration-300"
						to="#education"
					>
						Education
					</HashLink>
				</li>
				<li>
					<HashLink
						className="hover:text-gray-50 duration-300"
						to="#projects"
					>
						Projects
					</HashLink>
				</li>
				<li>
					<HashLink
						className="hover:text-gray-50 duration-300"
						to="#contact"
					>
						Contact me
					</HashLink>
				</li>
			</ul>
		</nav>
	);
}

"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("./pages/About"), {
	ssr: false,
});
const Skills = dynamic(() => import("./pages/Skills"), {
	ssr: false,
});
const Education = dynamic(() => import("./pages/Education"), {
	ssr: false,
});
const Projects = dynamic(() => import("./pages/Projects"), {
	ssr: false,
});
const Contact = dynamic(() => import("./pages/Contact"), {
	ssr: false,
});
const Footer = dynamic(() => import("./pages/Footer"), {
	ssr: false,
});

const Navbar = dynamic(() => import("./components/Navbar"), {
	ssr: false,
});

import React from "react";

export default function Home() {
	return (
		<div className="no-scrollbar">
			<Navbar />
			<div className="bg-black flex flex-col gap-32">
				<About />
				<Skills />
				<Education />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

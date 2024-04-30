"use client";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import React from "react";

export default function Home() {
	return (
		<div className="no-scrollbar">
			<BrowserRouter>
				<Navbar />
				<div className="bg-black flex flex-col gap-32">
					<About />
					<Skills />
					<Education />
					<Projects />
					<Contact />
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
}

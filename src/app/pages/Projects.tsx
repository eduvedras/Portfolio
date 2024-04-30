"use client";

import dynamic from "next/dynamic";

const ProjectCard = dynamic(() => import("../components/ProjectCard"), {
	ssr: false,
});

function Projects() {
	return (
		<section className="w-screen flex flex-col gap-12" id="projects">
			<h1 className="mx-auto text-6xl text-teal-500">Projects</h1>
			<div className="grid grid-rows-2 grid-cols-2 gap-8 m-auto">
				<ProjectCard card="Pokemon" />
				<ProjectCard card="IVM" />
				<ProjectCard card="Planet" />
				<ProjectCard card="Overcooked" />
			</div>
		</section>
	);
}

export default Projects;

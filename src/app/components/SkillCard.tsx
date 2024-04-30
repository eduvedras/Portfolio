"use client";
import Skill from "./Skill";

interface SkillCardProps {
	card: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ card }) => {
	const frontend: string[] = [
		"JavaScript",
		"TypeScript",
		"React",
		"HTML",
		"CSS",
		"TailwindCSS",
		"Next.js",
		"Three.js",
		"D3.js",
	];

	const backend: string[] = [
		"Python",
		"Java",
		"Flask",
		"Spring",
		"PostgresSQL",
		"MySQL",
		"Julia",
		"C",
		"Apache Maven",
	];

	const ml: string[] = [
		"Python",
		"PyTorch",
		"Pandas",
		"TensorFlow",
		"Matplotlib",
		"scikit-learn",
	];
	const tools: string[] = [
		"Git",
		"GitHub",
		"Docker",
		"Vercel",
		"Hugging Face",
		"Bash",
	];

	let rows: React.JSX.Element[] = [];

	switch (card) {
		case "Front-End":
			frontend.forEach((element) => {
				rows.push(<Skill key={element} skill={element} />);
			});
			break;
		case "Back-End":
			backend.forEach((element) => {
				rows.push(<Skill key={element} skill={element} />);
			});
			break;
		case "Machine Learning":
			ml.forEach((element) => {
				rows.push(<Skill key={element} skill={element} />);
			});
			break;
		case "Tools":
			tools.forEach((element) => {
				rows.push(<Skill key={element} skill={element} />);
			});
			break;
	}

	return (
		<div className="flex flex-col border-teal-500 border rounded-xl shadow-md shadow-teal-700 m-auto p-6">
			<h1 className="mx-auto text-4xl text-gray-300">{card}</h1>
			<div className="flex m-auto flex-wrap gap-4 p-4 justify-center">
				{rows}
			</div>
		</div>
	);
};

export default SkillCard;

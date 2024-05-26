import React from "react";
import {
	FaUser,
	FaGraduationCap,
	FaBriefcase,
	FaProjectDiagram,
	FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {
	return (
		<div className="flex flex-col items-center h-screen p-4 bg-gray-950 text-white w-32">
			<nav className="flex flex-col flex-1 justify-center space-y-8">
				<a
					href="#about"
					className="flex items-center space-x-2 hover:text-purple-500"
				>
					<FaUser size={30} />
				</a>
				<a
					href="#education"
					className="flex items-center space-x-2 hover:text-purple-500"
				>
					<FaGraduationCap size={30} />
				</a>
				<a
					href="#experience"
					className="flex items-center space-x-2 hover:text-purple-500"
				>
					<FaBriefcase size={30} />
				</a>
				<a
					href="#projects"
					className="flex items-center space-x-2 hover:text-yellow-500"
				>
					<FaProjectDiagram size={30} />
				</a>
				<a
					href="#contact"
					className="flex items-center space-x-2 hover:text-yellow-500"
				>
					<FaEnvelope size={30} />
				</a>
			</nav>
		</div>
	);
};

export default Sidebar;

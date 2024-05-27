// src/components/Sidebar.jsx

import React from "react";
import { Link } from "react-router-dom";
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
				<Link
					to="/"
					className="flex items-center space-x-2 hover:text-purple-500"
				>
					<FaUser size={30} />
				</Link>
				<Link
					to="/education"
					className="flex items-center space-x-2 hover:text-purple-500"
				>
					<FaGraduationCap size={30} />
				</Link>
				<Link
					to="/projects"
					className="flex items-center space-x-2 hover:text-yellow-500"
				>
					<FaProjectDiagram size={30} />
				</Link>
				<Link
					to="/contact"
					className="flex items-center space-x-2 hover:text-yellow-500"
				>
					<FaEnvelope size={30} />
				</Link>
			</nav>
		</div>
	);
};

export default Sidebar;

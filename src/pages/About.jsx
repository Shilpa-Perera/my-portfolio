// src/pages/AboutMe.jsx

import React from "react";
import myImage from "../assets/my_photo.png";
import { FaDownload } from "react-icons/fa";
import resumePDF from "../assets/my_resume.pdf";

const About = () => {
	return (
		<div className="flex items-center p-8 bg-gradient-to-r from-gray-950 to-blue-900 h-screen ">
			<div className="w-1/3 animate-slideInUp">
				<img
					src={myImage}
					alt="Shilpa Perera"
					className="rounded-full w-128 h-128 object-cover mx-auto"
				/>
			</div>
			<div className="w-2/3 pl-8  font-mono animate-slideInUp">
				<h1 className="text-8xl text-center font-mono font-bold mb-4 text-white">
					Hi there !
				</h1>
				<h1 className="text-8xl text-center font-mono font-bold mb-4 text-white">
					I'm Shilpa Perera
				</h1>
				<p className="text-3xl text-center text-white">
					Welcome to my portfolio
				</p>
				<div className="text-center mt-8">
					<a
						href={resumePDF}
						download="Shilpa_Perera_Resume.pdf"
						className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-700  font-bold rounded-full transition duration-300"
					>
						<FaDownload className="mr-2" /> Download Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;

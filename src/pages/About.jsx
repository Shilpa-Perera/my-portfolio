import React from "react";
import myImage from "../assets/my_photo.png";
import { FaDownload } from "react-icons/fa";
import resumePDF from "../assets/my_resume.pdf";

const About = () => {
	return (
		<div className="flex flex-col md:flex-row items-center p-8 bg-gradient-to-r from-gray-950 to-blue-900 min-h-screen">
			<div className="w-full md:w-1/3 animate-slideInUp mb-8 md:mb-0">
				<img
					src={myImage}
					alt="Shilpa Perera"
					className="rounded-full lg:w-128 lg:h-128 object-cover mx-auto"
				/>
			</div>
			<div className="w-full md:w-2/3 md:pl-8 font-serif animate-slideInUp">
				<h1 className="text-5xl lg:text-8xl md:text-6xl  text-center font-serif font-bold mb-4 text-white">
					Hi there !
				</h1>
				<h1 className="text-5xl lg:text-8xl md:text-6xl text-center font-serif font-bold mb-4 text-white">
					I'm Shilpa Perera
				</h1>
				<p className="text-xl md:text-2xl lg:text-3xl text-center text-white">
					Welcome to my portfolio
				</p>
				<div className="text-center mt-8">
					<a
						href={resumePDF}
						download="Shilpa_Perera_Resume.pdf"
						className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-700 font-bold rounded-full transition duration-300"
					>
						<FaDownload className="mr-2" /> Download Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaGraduationCap, FaCode, FaEnvelope } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Sidebar = () => {
	const [activeLink, setActiveLink] = useState("/");

	const handleLinkClick = (link) => {
		setActiveLink(link);
	};

	return (
		<div className="bg-gray-950 text-white w-full sm:w-32 h-20 sm:h-full flex flex-row sm:flex-col justify-center items-center p-1 fixed sm:fixed top-0 left-0 sm:top-0 sm:left-0">
			<nav className="flex flex-row sm:flex-col justify-center w-full sm:space-y-8 space-x-4 sm:space-x-0 items-center">
				<Link
					to="/"
					className={`flex items-center sm:justify-center ${
						activeLink === "/"
							? "text-purple-500"
							: "hover:text-purple-500"
					}`}
					onClick={() => handleLinkClick("/")}
				>
					<div
						className={`rounded-full bg-transparent border-2 border-purple-500 p-2 sm:p-4 ${
							activeLink === "/" && "bg-purple-500"
						}`}
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Welcome"
						data-tooltip-place="top"
					>
						<FaUser className="text-xl sm:text-3xl" />
					</div>
				</Link>
				<Link
					to="/education"
					className={`flex items-center sm:justify-center ${
						activeLink === "/education"
							? "text-purple-500"
							: "hover:text-purple-500"
					}`}
					onClick={() => handleLinkClick("/education")}
				>
					<div
						className={`rounded-full bg-transparent border-2 border-purple-500 p-2 sm:p-4 ${
							activeLink === "/education" && "bg-purple-500"
						}`}
						data-tooltip-id="my-tooltip"
						data-tooltip-content="My Journey"
						data-tooltip-place="top"
					>
						<FaGraduationCap className="text-xl sm:text-3xl" />
					</div>
				</Link>
				<Link
					to="/projects"
					className={`flex items-center sm:justify-center ${
						activeLink === "/projects"
							? "text-purple-500"
							: "hover:text-purple-500"
					}`}
					onClick={() => handleLinkClick("/projects")}
				>
					<div
						className={`rounded-full bg-transparent border-2 border-purple-500 p-2 sm:p-4 ${
							activeLink === "/projects" && "bg-purple-500"
						}`}
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Projects"
						data-tooltip-place="top"
					>
						<FaCode className="text-xl sm:text-3xl" />
					</div>
				</Link>
				<Link
					to="/testimonial"
					className={`flex items-center sm:justify-center ${
						activeLink === "/testimonial"
							? "text-purple-500"
							: "hover:text-purple-500"
					}`}
					onClick={() => handleLinkClick("/testimonial")}
				>
					<div
						className={`rounded-full bg-transparent border-2 border-purple-500 p-2 sm:p-4 ${
							activeLink === "/testimonial" && "bg-purple-500"
						}`}
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Testimonial"
						data-tooltip-place="top"
					>
						<BsStars className="text-xl sm:text-3xl" />
					</div>
				</Link>
				<Link
					to="/contact"
					className={`flex items-center sm:justify-center ${
						activeLink === "/contact"
							? "text-purple-500"
							: "hover:text-purple-500"
					}`}
					onClick={() => handleLinkClick("/contact")}
				>
					<div
						className={`rounded-full bg-transparent border-2 border-purple-500 p-2 sm:p-4 ${
							activeLink === "/contact" && "bg-purple-500"
						}`}
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Contact Me"
						data-tooltip-place="top"
					>
						<FaEnvelope className="text-xl sm:text-3xl" />
					</div>
				</Link>
			</nav>
		</div>
	);
};

export default Sidebar;

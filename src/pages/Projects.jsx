import React from "react";
import { FaGithub, FaMediumM } from "react-icons/fa";
import project2 from "../assets/project_2.png";
import project1 from "../assets/project_1.png";
import project3 from "../assets/project_3.png";
import project4 from "../assets/project_4.png";
import project5 from "../assets/project_5.png";
import project6 from "../assets/project_6.png";
import project7 from "../assets/project_7.png";
import project8 from "../assets/project_8.png";
import project9 from "../assets/project_9.png";

import blog1 from "../assets/blog_1.png";
import blog2 from "../assets/blog_2.png";

const projects = [
	{
		id: 1,
		title: "GPA Calculator",
		description:
			"Customizable and user-friendly application developed using Flutter. It allows users to define their own grading point system, manage semesters, add modules, and calculate their GPA.",
		image: project1,
		githubUrl: "https://github.com/Shilpa-Perera/GPACalculator",
	},
	{
		id: 3,
		title: "Cloud-Native Realtime Multi Blockchain Visualiser",
		description:
			"A blockchain visualization framework that can visualize real-time statistics of a blockchain network using cloud-native technologies.",
		image: project3,
		githubUrl: "https://github.com/OneBCVis",
	},
	{
		id: 4,
		title: "My Portfolio",
		description:
			"Portfolio website which showcase projects and other details. It is a responsive web application implemented using React js and tailwind css.",
		image: project4,
		githubUrl: "https://github.com/Shilpa-Perera/my-portfolio",
	},
	{
		id: 2,
		title: "Let'sGo : Indoor positioning using wifi fingerprinting",
		description:
			"Let'sGo indoor navigation app utilises Wi-Fi fingerprinting alongside GPS to track indoor positions effectively.",
		image: project2,
		githubUrl: "https://github.com/Shilpa-Perera/LetsGo",
	},

	{
		id: 5,
		title: "Resource Booking Service - Backend Contribution",
		description:
			"University resource booking system using MOSIP (Modular Opensource Identity Platform) with bio-metric verification.",
		image: project5,
		githubUrl: "https://github.com/cse-mosip/booking-service",
	},
	{
		id: 6,
		title: "Kryptonaut : NFT Marketplace",
		description:
			"Customizable and user-friendly application developed using Flutter. It allows users to define their own grading point system, manage semesters, add modules, and calculate their GPA.",
		image: project6,
		githubUrl: "https://github.com/Shilpa-Perera/GPACalculator",
	},
	{
		id: 7,
		title: "Texas E-store : E-Commerce platform",
		description:
			"A web application that enables the commercial process of buying and selling over the internet. The application has main features for customers to find specific products, cart feature for order management, inventory management and report generation",
		image: project7,
		githubUrl: "https://github.com/Shilpa-Perera/E-Commerce-Platform",
	},
	{
		id: 8,
		title: "Home Quarantine Management System",
		description:
			"A web application for continuously monitor the progression of home-quarantined patients with COVID-19. The Application provides mechanism for patients to record their symptoms. The doctors which assigned will monitor the provides feedback.",
		image: project8,
		githubUrl:
			"https://github.com/chathuranga-jayanath-99/home-quarantine-management-system",
	},
	{
		id: 9,
		title: "Kafka-Wikimedia",
		description:
			"Simple producer-consumer application using Apache Kafka, Spring Boot and MongoDB",
		image: project9,
		githubUrl: "https://github.com/Shilpa-Perera/kafka-wikimedia",
	},
];

const blogs = [
	{
		id: 1,
		title: "Rollups: Tackling the Blockchain Trilemma",
		start: "Rollups concept entered to the spotlight during Ethereum’s transition from the Proof of Work (PoW) consensus to the Proof of Stake (PoS) consensus. This migration is called “The Merge” and laid the groundwork for scalability upgrades on the network. When it comes to blockchain networks, one question that arises is why scaling is needed?",
		image: blog1,
		mediumUrl:
			"https://medium.com/@laksahaniperera/rollups-tackling-the-blockchain-trilemma-d6b45f681d8f",
	},
	{
		id: 2,
		title: "UTXO: Is it a transaction?",
		start: "If you are someone interested in blockchain technology, I’m sure that you have come across this UTXO model. If not don’t worry I will make you a hero from zero UTXO knowledge.",
		image: blog2,
		mediumUrl:
			"https://medium.com/@laksahaniperera/if-you-are-someone-interested-in-blockchain-technology-im-sure-that-you-have-come-across-this-616fba300de1",
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen bg-gradient-to-r from-gray-950 to-blue-900 py-12 flex flex-col justify-center">
			<div className="container mx-auto px-16 mb-8 text-center animate-slideInUp">
				<h2 className="text-white text-5xl sm:text-7xl font-bold mb-4 font-serif">
					Projects
				</h2>
			</div>
			<div className="container mx-auto px-16 animate-slideInUp">
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 group"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-80 object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-green-400 to-indigo-900 bg-opacity-0 group-hover:bg-opacity-80 items-center justify-center text-white transition-opacity opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 text-center animate-none group-hover:animate-slide-in-up">
								<div>
									<h3 className="text-2xl font-semibold mb-2">
										{project.title}
									</h3>
									<p className="text-gray-300">
										{project.description}
									</p>
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-300 hover:text-white mt-4 inline-block"
									>
										<FaGithub
											size={24}
											className="mr-2 inline"
										/>
										View on GitHub
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="my-12"></div>
			<div className="container mx-auto px-16 mb-8 text-center">
				<h2 className="text-white text-5xl sm:text-7xl font-bold mb-4 font-serif">
					Blog Articles
				</h2>
			</div>
			<div className="container mx-auto px-16">
				<div className="flex flex-col items-center md:flex-row md:items-start animate-slideInUp">
					<div className="w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogs.map((blog) => (
							<div
								key={blog.id}
								className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 group"
							>
								<img
									src={blog.image}
									alt={blog.title}
									className="w-full h-80 sm:h-70 object-cover"
								/>
								<div className="p-4 bg-white">
									<h3 className="text-xl font-bold mb-2">
										{blog.title}
									</h3>
									<p className="text-gray-700">
										{blog.start}
									</p>
								</div>
								<div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-80  flex items-center justify-center text-white transition-opacity opacity-0 group-hover:opacity-100 animate-none group-hover:animate-slide-in-up">
									<a
										href={blog.mediumUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaMediumM
											className="round-lg"
											size={48}
										/>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

import React from "react";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoSchool } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaPenAlt } from "react-icons/fa";

const Education = () => {
	const educationData = [
		{
			id: 1,
			title: "Visiting Instructor",
			institution:
				"Department of Computer Science and Engineering, University of Moratuwa, Sri Lanka.",
			year: "2023 July - 2023 Nov",
			description:
				"Conducted CS 2053 Computer Architecture practical lab sessions",
			side: "right",
			icon: <GiTeacher className="text-black text-lg sm:text-2xl" />,
		},
		{
			id: 2,
			title: "Intern Software Engineer",
			institution: "D F N Technology Pvt Ltd, Malabe, Sri Lanka.",
			year: "2023 Jan - 2023 July",
			description:
				"Worked on backend implementation of a Hyperledger Fabric blockchain network creator tool",
			side: "left",
			icon: <FaLaptopCode className="text-black text-lg sm:text-2xl" />,
		},
		{
			id: 3,
			title: "BSc (Hons) in Computer Science and Engineering",
			institution: "University of Moratuwa, Sri Lanka",
			year: "2020 - 2024",
			description:
				"GPA - 3.81, Dean's list - semester 1, semester 4, semester 5, semester 6",
			side: "right",
			icon: <IoSchool className="text-black text-lg sm:text-2xl" />,
		},
		{
			id: 4,
			title: "GCE Advanced Level Exam",
			institution: "Gothami Balika Vidyalaya, Colombo 10",
			year: "2015-2018",
			description: "Passed with 2A passes and a B pass",
			side: "left",
			icon: <LiaSchoolSolid className="text-black text-lg sm:text-2xl" />,
		},
		{
			id: 4,
			title: "GCE Ordinary Level Exam",
			institution: "Gothami Balika Vidyalaya, Colombo 10",
			year: "2014",
			description: "Passed with 9A passes",
			side: "right",
			icon: <FaPenAlt className="text-black text-lg sm:text-2xl" />,
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-r from-gray-950 to-blue-900 py-6 flex flex-col justify-center sm:py-12">
			<div className="animate-slideInUp text-center text-white text-5xl sm:text-7xl font-bold font-serif mb-12">
				My Journey
			</div>
			<div className="py-3 sm:max-w sm:mx-auto w-full grid grid-cols-5 gap-4">
				<div className="col-span-1"></div>
				<div className="col-span-3">
					<div className="relative text-gray-700 antialiased text-sm font-semibold">
						<div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
						{educationData.map((item) => (
							<div
								className={`mt-6 sm:mt-0 sm:mb-12 ${
									item.side === "left" ? "sm:pr-8" : "sm:pl-8"
								} animate-slideInUp`}
								key={item.id}
							>
								<div className="flex flex-col sm:flex-row items-center">
									<div
										className={`flex ${
											item.side === "left"
												? "justify-start"
												: "justify-end"
										} w-full mx-auto items-center`}
									>
										<div
											className={`w-full sm:w-1/2 ${
												item.side === "left"
													? "sm:pr-8"
													: "sm:pl-8"
											}`}
										>
											<div className="mt-5 sm:mt-0 p-4 bg-white rounded shadow group hover:bg-gradient-to-t from-green-400 to-indigo-900 hover:text-white relative overflow-hidden">
												<div className="initial-content transition-transform duration-300 group-hover:translate-y-full group-hover:opacity-0">
													<h2 className="text-xl font-bold ">
														{item.title}
													</h2>
													<h3 className="text-lg font-semibold ">
														{item.institution}
													</h3>
													<p className="text-sm ">
														{item.year}
													</p>
												</div>
												<div className="description-content absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
													<p className="text-lg text-center px-4 ">
														{item.description}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="rounded-full bg-blue-500 border-white border-4 w-12 h-12  sm:w-16 sm:h-16 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
										{item.icon}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="col-span-1 flex justify-center items-center"></div>
			</div>
		</div>
	);
};

export default Education;

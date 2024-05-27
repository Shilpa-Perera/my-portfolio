import React from "react";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoSchool } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

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
			icon: <GiTeacher className="text-black text-2xl" />,
		},
		{
			id: 2,
			title: "Intern Software Engineer",
			institution: "D F N Technology Pvt Ltd, Malabe, Sri Lanka.",
			year: "2023 Jan - 2023 July",
			description:
				"Worked on backend implementation of a Hyperledger Fabric blockchain network creator tool",
			side: "left",
			icon: <FaLaptopCode className="text-black text-2xl" />,
		},
		{
			id: 3,
			title: "BSc (Hons) in Computer Science and Engineering",
			institution: "University of Moratuwa, Sri Lanka",
			year: "2020 - 2024",
			description:
				"GPA - 3.81, Dean's list - semester 1, semester 4, semester 5, semester 6",
			side: "right",
			icon: <IoSchool className="text-black text-2xl" />,
		},
		{
			id: 4,
			title: "GCE Advanced Level Exam",
			institution: "Gothami Balika Vidyalaya, Colombo 10",
			year: "2015-2018",
			description: "Passed with 2A passes and a B pass",
			side: "left",
			icon: <LiaSchoolSolid className="text-black text-2xl" />,
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-r from-gray-950 to-blue-900 py-6 flex flex-col justify-center sm:py-12">
			<div className="py-3 sm:max-w sm:mx-auto w-full grid grid-cols-5 gap-4">
				<div className="col-span-1">
					{/* <div className="transform rotate-270 origin-center text-white text-2xl font-bold">
						My Journey
					</div> */}
				</div>
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
											<div className="p-4 bg-white rounded shadow hover:bg-gray-900 hover:text-white">
												<h2 className="text-xl font-bold">
													{item.title}
												</h2>
												<h3 className="text-lg font-semibold">
													{item.institution}
												</h3>
												<p className="text-sm">
													{item.year}
												</p>
												<p className="text-sm">
													{item.description}
												</p>
											</div>
										</div>
									</div>
									<div className="rounded-full bg-blue-500 border-white border-4 w-16 h-16 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
										{item.icon}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="col-span-1 flex justify-center items-center">
					<div className="transform rotate-90 origin-center text-white text-7xl font-bold">
						My Journey
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;

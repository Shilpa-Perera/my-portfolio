import React from "react";
import {
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
	FaLinkedin,
	FaGithub,
	FaMedium,
	FaFacebook,
} from "react-icons/fa";

const Contact = () => {
	return (
		<div className="min-h-screen bg-gradient-to-r from-gray-950 to-blue-900 py-6 flex flex-col justify-center sm:py-12">
			<div className="text-center text-white text-5xl sm:text-7xl font-bold mb-16 animate-slideInUp font-serif">
				Contact Me
			</div>
			<div className="py-3 sm:max-w sm:mx-auto w-full">
				{/* <div className="col-span-1">
					<div className="transform -rotate-90 origin-center text-white text-7xl font-bold">
						Contact Me
					</div>
				</div> */}
				<div className="col-span-3 flex flex-col items-center text-gray-700 antialiased text-lg font-semibold">
					<div className="flex flex-col items-center space-y-4">
						<div className="flex items-center text-gray-900 animate-slideInUp">
							<div className="rounded-full bg-blue-500 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mr-4">
								<FaPhone size={25} />
							</div>
							<div className="rounded-lg bg-white p-4 text-bold text-gray-700">
								+94762658273
							</div>
						</div>
						<div className="flex items-center text-gray-900 animate-slideInUp">
							<div className="rounded-full bg-blue-500 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mr-4">
								<FaEnvelope size={25} />
							</div>
							<div className="rounded-lg bg-white p-4 text-bold text-gray-700">
								<a href="mailto:shilpa.laksahani@gmail.com">
									shilpa.laksahani@gmail.com
								</a>
							</div>
						</div>
						<div className="flex items-center text-gray-900 animate-slideInUp">
							<div className="rounded-full bg-blue-500 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mr-4">
								<FaMapMarkerAlt size={25} />
							</div>
							<div className="rounded-lg bg-white p-4 text-bold text-gray-700">
								Colombo, Sri Lanka
							</div>
						</div>
					</div>

					<div className="flex items-center w-full my-8 mt-12 animate-slideInUp">
						<div className="flex-grow border-t border-white"></div>
						<div className="flex space-x-4 mx-4 text-white">
							<a href="https://www.linkedin.com/in/shilpa-perera-866522201/">
								<FaLinkedin
									size={40}
									className="hover:text-blue-500"
								/>
							</a>
							<a href="https://github.com/Shilpa-Perera">
								<FaGithub
									size={40}
									className="hover:text-blue-500"
								/>
							</a>
							<a href="https://medium.com/@laksahaniperera">
								<FaMedium
									size={40}
									className="hover:text-blue-500"
								/>
							</a>
							<a href="https://www.facebook.com/shilpa1.perera/">
								<FaFacebook
									size={40}
									className="hover:text-blue-500"
								/>
							</a>
						</div>
						<div className="flex-grow border-t border-white"></div>
					</div>
				</div>
				<div className="col-span-1 flex justify-center items-center"></div>
			</div>
		</div>
	);
};

export default Contact;

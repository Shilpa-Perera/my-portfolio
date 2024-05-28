import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Testimonial = () => {
	return (
		<div className="h-screen bg-gradient-to-r from-gray-950 to-blue-900 flex items-center justify-center">
			<div className="animate-slideInUp text-center">
				<div className="text-white text-7xl font-bold mb-12">
					What They Say ...
				</div>
				<div className="p-8 animate-slideInUp">
					<section className="bg-gradient-to-r from-gray-100 to-white rounded-lg p-8 shadow-lg">
						<div className="max-w-screen-md mx-auto text-center">
							<figure>
								<svg
									className="h-12 mx-auto mb-3 text-gray-400"
									viewBox="0 0 24 27"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
										fill="currentColor"
									/>
								</svg>
								<blockquote>
									<p className="text-xl font-medium text-gray-700">
										"Shilpa made significant contributions
										as a member of our Blockchain Network
										Creator project, focusing on the
										back-end implementation. She showcased
										her expertise in React, Java, Spring
										Boot, Hyperledger Fabric, and Docker.
									</p>
									<p className="text-xl font-medium text-gray-700">
										Shilpa's remarkable qualities as a quick
										learner, team player, and eagerness to
										learn were evident throughout her
										internship. Moreover, her proactive
										approach, attention to detail, and
										problem-solving skills played a pivotal
										role in the project's success"
									</p>
								</blockquote>
								<figcaption className="flex items-center justify-center mt-6 space-x-3">
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.linkedin.com/posts/shilpa-perera-866522201_congratulations-shilpa-perera-on-the-successful-activity-7082346313236840448-oU1I?utm_source=share&utm_medium=member_desktop"
									>
										<FaLinkedin
											size={23}
											className="text-blue-800 hover:text-black"
										/>
									</a>
									<div className="flex items-center divide-x-2 divide-gray-500">
										<div className="pr-3 font-medium text-gray-900">
											DFN Core Dev-NTP-Algo
										</div>
										<div className="pl-3 text-sm font-light text-gray-500">
											DirectFN Technologies
										</div>
									</div>
								</figcaption>
							</figure>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;

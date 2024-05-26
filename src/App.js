import React from "react";
import Sidebar from "./components/SideBar";
import About from "./pages/About";

function App() {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex-1">
				<section id="about" className="mb-10">
					<About />
				</section>
				<section id="education" className="mb-10">
					<h2 className="text-3xl font-bold mb-4">Education</h2>
					<p>Your educational background.</p>
				</section>
				<section id="experience" className="mb-10">
					<h2 className="text-3xl font-bold mb-4">Experience</h2>
					<p>Your professional experience.</p>
				</section>
				<section id="projects" className="mb-10">
					<h2 className="text-3xl font-bold mb-4">Projects</h2>
					<p>Details of your projects.</p>
				</section>
				<section id="contact" className="mb-10">
					<h2 className="text-3xl font-bold mb-4">Contact Me</h2>
					<p>How to contact you.</p>
				</section>
			</div>
		</div>
	);
}

export default App;

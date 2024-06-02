import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";

function App() {
	return (
		<Router>
			<div className="flex flex-col sm:flex-row h-screen">
				<Sidebar />
				<div className="flex-1 overflow-y-auto pt-20 sm:pt-0 sm:ml-32">
					<Routes>
						<Route path="/" element={<About />} />
						<Route path="/education" element={<Education />} />
						<Route path="/testimonial" element={<Testimonial />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;

import { Routes, Route } from "react-router-dom";

import Hero from "./Components/Hero";
import ProjectGallery from "./Components/ProjectGallery";
import BottomNav from "./Components/BottomNav";
import ContactInfo from "./Components/ContactInfo";
import AboutMe from "./Components/AboutMe";

export default function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/about" element={<AboutMe />} />
				<Route path="/projects" element={<ProjectGallery />} />
				<Route path="/contactinfo" element={<ContactInfo />} />
				{/* <Route path='/' element={ < /> }/> */}
			</Routes>

			<AboutMe />
			<ProjectGallery />

			<ContactInfo />
			<BottomNav />
		</div>
	);
}

import Hero from "./Components/Hero";
import ProjectGallery from "./Components/ProjectGallery";
import BottomNav from "./Components/BottomNav";
import ContactInfo from "./Components/ContactInfo";
import AboutMe from "./Components/AboutMe";

export default function App() {
	return (
		<div>
			<Hero id="hero" />
			<AboutMe />
			<ProjectGallery id="projectgallery" />

			<ContactInfo id="contactinfo" />
			<BottomNav id="navbar" />
		</div>
	);
}

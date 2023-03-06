import Hero from "./Components/Hero";
import ProjectCard from "./Components/ProjectCard";
import BottomNav from "./Components/BottomNav";
import ContactInfo from "./Components/ContactInfo";
import AboutMe from "./Components/AboutMe";

export default function App() {
	return (
		<div>
			<Hero />
			<AboutMe />
			<ProjectCard />
			<ProjectCard />
			<ContactInfo />
			<BottomNav />
		</div>
	);
}

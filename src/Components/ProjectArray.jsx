import Wipit_form_view from "../Assets/Wipit_form_view.jpg";
import ContactManagerSS from "../Assets/ContactManagerSS.jpg";

const ProjectArray = [
	{
		id: "0",
		image: Wipit_form_view,
		title: "WIPit!",
		tech: "React, Javascript, HTML, ReactRouterDOM, Bootstrap, SaSS, Yarn Classic",
		description:
			"A craft project tracking app providing one convenient place to keep your project timeline, reference imagery, task lists, pattern links, design plans, and style boards. In the future, I hope to include social and targeted advertising aspects, showing directly relevant products in the user's region based on material list and craft medium tag words. Realistically, the basic version will be readily adapted to any project-based task or hobby genre.",
		live: "https://wipit-first-version.netlify.app/",
		repo: "https://github.com/kemetcalf/craft-app",
	},
	{
		id: "1",
		image: ContactManagerSS,
		title: "Simple CRUD Contact Manager with Local Storage",
		tech: "React, Javascript, HTML, ReactRouterDOM, Semantic UI, Yarn Classic",
		description:
			"A simple Create-Read-Update-Delete Contact Manager that uses local browser storage to display a contact list and contact detail card view, as well as the ability to modify and delete unique contact info",
		live: "https://contact-crud-app-2020.netlify.app/",
		repo: "https://github.com/kemetcalf/contact-manager",
	},
	// {
	// 	id: "2",
	// 	image: random_code,
	// 	title: "Beep_Boop",
	// 	tech: "Python",
	// 	description: "beep boop meep moop error: exit code 1",
	// 	live: "",
	// 	repo: "",
	// },
];

export default ProjectArray;

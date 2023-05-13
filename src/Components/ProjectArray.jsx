import wipit_formview2 from "../Assets/wipit_formview2.jpg";
import contact_mgr1 from "../Assets/contact_mgr1.jpg";
import movie_browser2 from "../Assets/movie_browser2.jpg";
import swapi_genview from "../Assets/swapi_genview.jpg";
import firestock_home from "../Assets/firestock_home.jpg";

const ProjectArray = [
	{
		id: "17a8a576-60d1-41ec-900c-cf767094a9ac",
		image: firestock_home,
		title: "Firestock: Fullstack Image Gallery",
		tech: "React, Javascript, HTML, ReactRouterDOM, Bootstrap, Firebase SDK, Google Authentication",
		description:
			"A fullstack stock image gallery built as a create-react-app single page application, styled with Bootstrap, and supported by Firebase Cloud Storage, Authentication, Hosting, and Firestore Database",
		live: "https://firestock-8d347.web.app",
		repo: "https://github.com/kemetcalf/prod-app",
	},
	{
		id: "95fb5997-a5af-46be-a7ef-902234220765",
		image: wipit_formview2,
		title: "WIPit! Fabrication Project Planning and Tracking",
		tech: "React, Javascript, HTML, ReactRouterDOM, Bootstrap, SaSS, Yarn Classic",
		description:
			"A craft project tracking app providing one convenient place to keep your project timeline, reference imagery, task lists, pattern links, design plans, and style boards. In the future, I plan to include social and targeted advertising aspects, showing directly relevant products in the user's region based on material list and build medium tag words. Realistically, the minimum viable product will be readily adapted to any project-based task or hobby genre.",
		live: "https://wipit-first-version.netlify.app/",
		repo: "https://github.com/kemetcalf/craft-app",
	},
	{
		id: "1dedfbf5-2e54-4492-9765-4be2e0b0e60c",
		image: contact_mgr1,
		title: "Simple CRUD Contact Manager with Local Storage",
		tech: "React, Javascript, HTML, ReactRouterDOM, Semantic UI, Yarn Classic",
		description:
			"A simple Create-Read-Update-Delete Contact Manager that uses local browser storage to display a contact list and contact detail card view, as well as the ability to modify and delete unique contact info",
		live: "https://contact-crud-app-2020.netlify.app/",
		repo: "https://github.com/kemetcalf/contact-manager",
	},
	{
		id: "b9c97d18-eeaf-45cc-ae0a-846caae60846",
		image: movie_browser2,
		title: "Movie Title Browser",
		tech: "React, Javascript, ReactRouterDOM, HTML, Yarn Classic",
		description:
			"A movie title search application populated with data from themoviedb.org's API that provides further movie info upon click in to the detail view.",
		live: "https://movie-gelato-07027a.netlify.app/",
		repo: "https://github.com/kemetcalf/Udemy/tree/main/React_201/Movie_Browser",
	},
	{
		id: "1b4f195b-de46-4cb1-94eb-4d7402560dc5",
		image: swapi_genview,
		title: "StarWars Character Generator",
		tech: "React, Javascript, ReactQuery, SWAPI REStful API, HTML, CSS, TailwindCSS, Yarn Classic",
		description:
			"A Star Wars character generator using ReactQuery to fetch and display basic info on a randomized character from a REST API, character specific fork of the popular SWAPI (Star Wars API).",
		live: "https://preeminent-swapi-pony-745218.netlify.app/",
		repo: "https://github.com/kemetcalf/swapi-gen",
	},
];

export default ProjectArray;

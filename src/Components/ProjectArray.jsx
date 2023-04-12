import wipit_formview2 from "../Assets/wipit_formview2.jpg";
import contact_mgr1 from "../Assets/contact_mgr1.jpg";
import movie_browser2 from "../Assets/movie_browser2.jpg";

const ProjectArray = [
	{
		id: "0",
		image: wipit_formview2,
		title: "WIPit!",
		tech: "React, Javascript, HTML, ReactRouterDOM, Bootstrap, SaSS, Yarn Classic",
		description:
			"A craft project tracking app providing one convenient place to keep your project timeline, reference imagery, task lists, pattern links, design plans, and style boards. In the future, I hope to include social and targeted advertising aspects, showing directly relevant products in the user's region based on material list and craft medium tag words. Realistically, the basic version will be readily adapted to any project-based task or hobby genre.",
		live: "https://wipit-first-version.netlify.app/",
		repo: "https://github.com/kemetcalf/craft-app",
	},
	{
		id: "1",
		image: contact_mgr1,
		title: "Simple CRUD Contact Manager with Local Storage",
		tech: "React, Javascript, HTML, ReactRouterDOM, Semantic UI, Yarn Classic",
		description:
			"A simple Create-Read-Update-Delete Contact Manager that uses local browser storage to display a contact list and contact detail card view, as well as the ability to modify and delete unique contact info",
		live: "https://contact-crud-app-2020.netlify.app/",
		repo: "https://github.com/kemetcalf/contact-manager",
	},
	{
		id: "2",
		image: movie_browser2,
		title: "Movie Title Browser",
		tech: "React, Javascript, ReactRouterDOM, HTML, Yarn Classic",
		description:
			"A movie title search application populated with data from themoviedb.org's API that provides further movie info upon click in to the detail view.",
		live: "https://movie-gelato-07027a.netlify.app/",
		repo: "https://github.com/kemetcalf/Udemy/tree/main/React_201/Movie_Browser",
	},
];

export default ProjectArray;

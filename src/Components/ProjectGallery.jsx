import ProjectCard from "./ProjectCard";
import ProjectArray from "./ProjectArray";

export default function ProjectGallery() {
	console.log(ProjectArray);
	const renderProjectList = ProjectArray.map((project) => {
		const { id, image, title, tech, description, live, repo } = project;
		return (
			<li>
				<ProjectCard
					id={id}
					image={image}
					title={title}
					tech={tech}
					description={description}
					live={live}
					repo={repo}
				/>
			</li>
		);
	});
	return (
		<div id="projectgallery">
			<ol className="list-none list-outside">{renderProjectList}</ol>
		</div>
	);
}

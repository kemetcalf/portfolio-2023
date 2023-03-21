export default function ProjectCard(props) {
	let { id, image, title, tech, description, live, repo } = props;
	return (
		<div id={id} className="p-8">
			<div className="card lg:card-side bg-base-300 shadow-xl">
				<figure>
					<img
						src={image}
						alt="App form screenshot"
						className="h-full object-left-top"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p className="text-secondary">{tech}</p>
					<p className="text-neutral-content">{description}</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">
							<a href={live} target="_blank" rel="noreferrer">
								View Live
							</a>
						</button>
						<button className="btn btn-secondary">
							<a href={repo} target="_blank" rel="noreferrer">
								View Repo
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

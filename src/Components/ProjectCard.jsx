import random_code from "../Assets/random_code.jpg";

export default function ProjectCard() {
	return (
		<div className="p-8">
			<div className="card lg:card-side bg-base-300 shadow-xl">
				<figure className="m-4">
					<img src={random_code} alt="Album" className="min-h-full w-full" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">This is a Project</h2>
					<p className="text-secondary">React - Tailwind - Daisy UI - Yarn</p>
					<p>
						This is a brief description of the project. Of course he's a happy
						little stone, cause we don't have any other kind. Maybe there's a
						happy little waterfall happening over here. There we are. I started
						painting as a hobby when I was little. I didn't know I had any
						talent. I believe talent is just a pursued interest. Anybody can do
						what I do. A little happy sunlight shining through there. You don't
						have to be crazy to do this but it does help.
					</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">View Live</button>
						<button className="btn btn-secondary">View Repo</button>
					</div>
				</div>
			</div>
		</div>
	);
}

import cool_cat from "../Assets/cool_cat.jpg";

export default function AboutMe() {
	return (
		<div className="m-12">
			<div className="hero min-h-max bg-base-300  rounded-lg">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={cool_cat}
						alt="grey cat wearing orange reflective sunnies"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Great to meet you!</h1>
						<p className="py-6">
							Cat ipsum dolor sit amet, you call this cat food or toy mouse
							squeak roll over but favor packaging over toy. I show my fluffy
							belly but it's a trap! if you pet it i will tear up your hand
							human is in bath tub, emergency! drowning! meooowww! commence
							midnight zoomies. Snob you for another person knock over christmas
							tree sit on human
						</p>
						<button className="btn btn-primary m-4">Get in touch</button>
						<button className="btn btn-secondary m-4">
							Check out my projects
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

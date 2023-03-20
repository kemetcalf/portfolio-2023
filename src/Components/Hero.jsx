import hero_cat from "../Assets/hero_cat.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function Hero() {
	return (
		<div id="hero" className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="">
					<h2 className="text-xl text-accent text-center font-bold pb-4 lg:hidden">
						Looks like you found yourself a...
					</h2>
					<img
						src={hero_cat}
						alt="grey cat sitting next to a vase of colorful daisies"
						className="max-w-sm mask mask-hexagon-2 rounded-lg shadow-xl"
					/>
				</div>
				<div className="max-w-lg text-center lg:text-right ">
					<h2 className="text-xl text-accent text-center font-bold pb-4 invisible lg:visible">
						Looks like you found yourself a...
					</h2>
					<h1 className="text-8xl text-accent font-bold"> Code Kat!</h1>
					<p className="py-6 ">
						Welcome to my webdev portfolio! Maybe you're thinking to yourself,
						"kat's can't code!" Well how did I make this website then, eh? Feel
						free to explore and get in touch if you think your team could
						benefit from some feline influence
					</p>
					<button className="btn btn-primary">
						<AnchorLink
							href="#projectgallery"
							className="tooltip tooltip-left"
							data-tip="Project Gallery"
						>
							Check out my projects
						</AnchorLink>
					</button>
				</div>
			</div>
		</div>
	);
}

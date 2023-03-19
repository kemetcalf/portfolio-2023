import cool_cat from "../Assets/cool_cat.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function AboutMe() {
	return (
		<div id="aboutme" className="m-12">
			<div className="hero min-h-max bg-base-300  rounded-lg">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={cool_cat}
						alt="grey cat wearing orange reflective sunnies"
						className="max-w-sm mask mask-squircle rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Hello, I'm Kat! </h1>
						<p className="py-6">
							My background is in e-commerce and customer service, but my
							training in design and curiosity about the possibilities of
							digital products have led me to pursue a new course. <br />
							<br />
							Though I'm new to the tech industry professionally, I've been
							building my front-end web dev skills since January 2022. Mostly
							self-taught through docs and tutorials, I've also reached out to
							friends in the community and filled in knowledge gaps with online
							courses. Technologies I'm comfortable with include React,
							Javascript, Git CLI, Github, Netlify, CSS and component libraries,
							3rd party packages, and HTML/CSS. <br />
							<br />
							Outside of work, I'm also a creator, renovator, and upcycler. I'm
							excited to apply those creative problem-solving skills and eye for
							aesthetics to my work as a front-end dev. I enjoy delivering
							reliable work that can be used and valued, contributing to the
							quality of people's lives. <br />
							<br /> If you're interested in connecting to learn more about my
							skills and experience, please reach out. I'm looking to explore
							opportunities in front-end web development and can't wait to see
							where this new journey takes me!
						</p>
						<button className="btn btn-primary m-2 active" href="/contactinfo">
							<AnchorLink
								href="#contactinfo"
								className="tooltip tooltip-left"
								data-tip="Contact Info"
							>
								Get in touch
							</AnchorLink>
						</button>
						<button className="btn btn-secondary m-2">
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
		</div>
	);
}

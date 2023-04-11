import old_headshot from "../Assets/old_headshot.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function AboutMe() {
	return (
		<div id="aboutme" className="min-w-full">
			<div className="hero bg-base-300 rounded-lg">
				<div className="hero-content flex flex-col justify-center lg:flex-row lg:justify-around">
					<div className="basis-1/4 lg:basis-2/5">
						<img
							src={old_headshot}
							alt="grey cat wearing orange reflective sunnies"
							className="mask mask-squircle rounded-lg shadow-2xl"
						/>
					</div>
					<div className="basis-3/5">
						<h1 className="text-5xl font-bold">Hello, I'm (actually) Kat!</h1>
						<p className="py-2 text-start">
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
						<div className="container ">
							<button
								className="btn btn-primary m-2 active"
								href="/contactinfo"
							>
								<AnchorLink href="#contactinfo">Get in touch</AnchorLink>
							</button>
							<button className="btn btn-secondary m-2">
								<AnchorLink href="#projectgallery">
									Check out my projects
								</AnchorLink>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

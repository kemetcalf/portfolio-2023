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
							alt="a headshot of a pale, smiling woman in her mid-20's with short brown hair"
							className="mask mask-squircle rounded-lg shadow-2xl"
						/>
					</div>
					<div className="basis-3/5">
						<h1 className="text-5xl font-bold">Hello, I'm (actually) Kat!</h1>
						<p className="py-2 text-start">
							My background is in e-commerce and customer service, but my
							training in design and curiosity about the possibilities of
							digital products has led me to pursue a new course. <br />
							<br />
							Though I'm new to the tech industry professionally, I've been
							building my front-end web dev skills since January 2022. Mostly
							self-studied through docs, tutorials, and online courses, I also
							collaborate with friends in the community to continuously build my
							knowledge base.
							<br />
							Technologies I'm comfortable with include React, Javascript, Git
							CLI, Github, Netlify, assorted CSS and component libraries, 3rd
							party packages, and HTML/CSS. I have limited experience with
							Python/Django, MySQL, and Node.js. Technologies I'm growing into
							include Google Cloud Platform, Firebase SDK, ReactQuery, and more
							advanced React and Git concepts.
							<br />
							<br />
							Outside of work, I'm also a creator, renovator, and upcycler. I'm
							excited to apply those creative problem-solving skills and eye for
							aesthetics to my work as a junior dev. I enjoy delivering reliable
							work, contributing to the quality of people's projects and lives.{" "}
							<br />
							<br /> If you're interested in connecting to learn more about my
							skills and experience, please reach out. I'm looking to explore
							new opportunities in web development and continue to grow!
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

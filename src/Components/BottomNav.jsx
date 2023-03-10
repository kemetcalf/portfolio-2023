// import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "boxicons";

export default function BottomNav() {
	return (
		<div id="navbar" className="btm-nav">
			<button className="text-secondary active">
				{/* <i class="bx bx-home-heart"></i> */}
				<AnchorLink
					href="#hero"
					className="tooltip tooltip-left"
					data-tip="Home"
				>
					<i className="bx bxs-home-heart bx-tada-hover bx-md" />
				</AnchorLink>
			</button>
			<button className="text-secondary active">
				<AnchorLink
					href="#aboutme"
					className="tooltip tooltip-left"
					data-tip="About Me"
				>
					<i className="bx bxs-cat bx-tada-hover bx-md"></i>
				</AnchorLink>
			</button>
			<button className="text-secondary active">
				<AnchorLink
					href="#projectgallery"
					className="tooltip tooltip-left"
					data-tip="Project Gallery"
				>
					<i className="bx bx-code-block bx-tada-hover bx-md"></i>
				</AnchorLink>
			</button>
			<button className="text-secondary active">
				<AnchorLink
					href="#contactinfo"
					className="tooltip tooltip-left"
					data-tip="Contact Info"
				>
					<i className="bx bxs-envelope bx-tada-hover bx-md"></i>
				</AnchorLink>
			</button>
		</div>
	);
}

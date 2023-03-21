// import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "boxicons";

export default function BottomNav() {
	return (
		<div id="navbar" className="btm-nav btm-nav-md md:btm-nav-sm">
			<button className="text-secondary active">
				{/* <i class="bx bx-home-heart"></i> */}
				<AnchorLink href="#hero">
					<i className="bx bxs-home-heart bx-tada-hover bx-md" />
				</AnchorLink>
			</button>
			<button className="text-secondary active">
				<AnchorLink href="#aboutme">
					<i className="bx bxs-cat bx-tada-hover bx-md"></i>
				</AnchorLink>
			</button>
			<button className="text-secondary active">
				<AnchorLink href="#projectgallery">
					<i className="bx bx-code-block bx-tada-hover bx-md"></i>
				</AnchorLink>
			</button>
			<button className="text-secondary active">
				<AnchorLink href="#contactinfo">
					<i className="bx bxs-envelope bx-tada-hover bx-md"></i>
				</AnchorLink>
			</button>
		</div>
	);
}

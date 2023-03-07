import "boxicons";
import { Link } from "react-router-dom";

export default function BottomNav() {
	return (
		<div className="btm-nav">
			<button className="text-secondary active">
				{/* <i class="bx bx-home-heart"></i> */}
				<Link to="/">
					<i class="bx bx-home-heart bx-tada-hover bx-md"></i>
				</Link>
			</button>
			<button className="text-secondary btn-disabled">
				<Link to="/blog">
					<i class="bx bxs-cat bx-tada-hover bx-md"></i>
				</Link>
			</button>
			<button className="text-secondary active">
				<Link to="/projects">
					<i class="bx bx-code-alt bx-tada-hover bx-md"></i>
				</Link>
			</button>
			<button className="text-secondary active">
				<Link to="/contactinfo">
					<i class="bx bx-chat bx-tada-hover bx-md"></i>
				</Link>
			</button>
		</div>
	);
}

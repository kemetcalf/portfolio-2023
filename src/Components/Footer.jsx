import "boxicons";

export default function Footer() {
	return (
		<div className="">
			<footer className="footer items-center p-4 pb-16 bg-neutral text-neutral-content">
				<div className="items-center grid-flow-col">
					<button className="btn btn-secondary mr-4">
						<a
							href="https://github.com/kemetcalf/portfolio-2023"
							target="_blank"
							rel="noreferrer"
						>
							View Site Repo
						</a>
					</button>
					<i className="bx bx-palette bx-sm"></i>
					<p className="mr-4">Designed and Built by Kathleen Metcalf</p>
					<i className="bx bx-copyright bx-sm"></i>
					<p>Copyright 2023 - All right reserved</p>
				</div>
			</footer>
		</div>
	);
}

export default function ContactInfo() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold m-4">Contact Info</h1>
					<div className="card w-96 bg-primary text-primary-content">
						<div className="card-body">
							<h2 className="card-title justify-center">Kathleen Metcalf</h2>
							<p>contact info goes here</p>
							<div className="card-actions justify-center">
								<button className="btn btn-circle">
									<a
										href="https://github.com/kemetcalf"
										target="_blank"
										rel="noreferrer"
									>
										<i class="bx bxl-github bx-tada-hover bx-md"></i>
									</a>
								</button>
								<button className="btn btn-md btn-circle">
									<a
										href="https://app.netlify.com/teams/kemetcalf/overview"
										target="_blank"
										rel="noreferrer"
									>
										<i class="bx bxl-netlify bx-tada-hover bx-md"></i>
									</a>
								</button>
								<button className="btn btn-circle">
									<a
										href="https://www.linkedin.com/in/kathleen-metcalf-07b875187"
										target="_blank"
										rel="noreferrer"
									>
										<i class="bx bxl-linkedin bx-tada-hover bx-md"></i>
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import DropButtonNav from "../atomo/DropButtonNav";


const LinkNavRigth = () => {
	return (
		<div>
			<ul className="navbar-nav d-flex align-items-center">
				<li className="nav-item px-3">
					<a
						className="nav-link p-0 ps-1"
						href="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<i className="bi bi-search text-white fs-5"> </i>
					</a>
				</li>

				<li className="nav-item px-3">
					<a
						href="#"
						className="d-block link-light text-decoration-none"
						id="dropdownUser1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<i className="bi bi-bell text-white fs-5"></i>
					</a>
				</li>

				<li className="nav-item text-white px-3 pt-1">
					<a
						href="#"
						className="d-block link-light text-decoration-none"
						id="dropdownUser1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<h6>KIDS</h6>
					</a>
				</li>

				<li className="nav-item px-3">
          <DropButtonNav />
				</li>
			</ul>
		</div>
	);
};

export default LinkNavRigth;

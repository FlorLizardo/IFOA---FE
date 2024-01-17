import DropButtonNav from "../atomo/DropButtonNav";
import { InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const LinkNavRigth = () => {
	const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleNavigate = () => {
		
    navigate('/results?cerca=' + search)
  }

	return (
		<div>
			<ul className="navbar-nav d-flex align-items-center">
				<li className="nav-item px-3">
				<InputGroup size="sm">
      <button className="btn btn-secondary" onClick={handleNavigate}>Search</button>
      <Form.Control
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
				name="search"
				value={search}
				onChange={(e) => {setSearch(e.target.value) }}
        
      />
    </InputGroup>
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

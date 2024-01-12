import avatar from "../../assets/img/kids_icon.png";
import { Dropdown } from "react-bootstrap";

const DropButtonNav = () => {
  const styles = {
    width: '2rem'
  }

	return (
		<Dropdown>
			<Dropdown.Toggle variant="dark" id="dropdown-basic" className="bg-black border border-0">
				<img src={avatar} alt="image avatar" style={styles} />
			</Dropdown.Toggle>

			<Dropdown.Menu className="dropdown-menu-dark">
				<Dropdown.Item href="#/action-1">Manage Profiles</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Account</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Help Center</Dropdown.Item>
				<Dropdown.Item></Dropdown.Item>
				<Dropdown.Item href="#/action-3">Sign Out Netflix</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default DropButtonNav;

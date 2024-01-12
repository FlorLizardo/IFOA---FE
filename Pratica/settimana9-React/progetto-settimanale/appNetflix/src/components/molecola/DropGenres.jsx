import { Dropdown } from "react-bootstrap";

const DropGenres = () => {
  return (
    <Dropdown className="pt-2 px-5">
				<Dropdown.Toggle
					className="text-light bg-transparent border border-light d-flex justify-content-between align-items-center px-3 button-lang"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Genres
				</Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-dark">
				<Dropdown.Item href="#/action-1" className="text-white">Horror</Dropdown.Item>
				<Dropdown.Item href="#/action-2" className="text-white">Fantasy</Dropdown.Item>
				<Dropdown.Item href="#/action-3" className="text-white">Comedy</Dropdown.Item>
			</Dropdown.Menu>
			</Dropdown>
  )
}

export default DropGenres
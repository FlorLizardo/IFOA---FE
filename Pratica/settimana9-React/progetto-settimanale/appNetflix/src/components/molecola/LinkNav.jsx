import { Link } from "react-router-dom"

const LinkNav = () => {
  return (
    <div>
      <ul className="navbar-nav d-flex align-items-center">
        <li className="nav-item">
          <Link className="nav-link text-white" to='/'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white active" to='/tvShows'>
            TV Shows
          </Link>
        </li>
        <li className="nav-item">
		 			<a className="nav-link text-white" href="#">Movies</a>
		 		</li>
				<li className="nav-item">
					<a className="nav-link text-white" href="#">Recently Added</a>
		 		</li>
		 		<li className="nav-item">
		 			<a className="nav-link text-white">My List</a>
				</li>
      </ul>
    </div>
  )
}

export default LinkNav
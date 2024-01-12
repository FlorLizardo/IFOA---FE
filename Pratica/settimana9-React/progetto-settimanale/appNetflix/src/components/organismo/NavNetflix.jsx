import ImgLogo from "../atomo/ImgLogo"
import LinkNav from "../molecola/LinkNav"
import LinkNavRigth from "../molecola/LinkNavRigth"

const NavNetflix = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black px-4 d-flex justify-content-between">
        <div className="d-flex">
          <ImgLogo />
          <LinkNav />
        </div>
        <div>
          <LinkNavRigth />
        </div>
      </nav>
    </>
  )
}

export default NavNetflix
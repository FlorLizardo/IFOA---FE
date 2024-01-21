import { Button, Nav } from "react-bootstrap"
import InputMeteo from "./InputMeteo"

const Header = ({handleSearch}) => {
  
  return (
    <Nav>
      <InputMeteo handleSearch={handleSearch}/>
      <Button variant="primary">Cerca altre città</Button>
    </Nav>
  )
}

export default Header
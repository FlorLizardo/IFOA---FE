import { Container, Row } from "react-bootstrap"
import Welcome from "./Welcome"
import AllTheBooks from "./AllTheBooks"

const MainContainer = () => {
  const customStyles = {
    minHeight: '81.3vh'
  }

  return (
    <Container style={customStyles}>
        <Row>
          <Welcome />
        </Row>
        <Row>
          <AllTheBooks />
        </Row>
      </Container>
  )
}

export default MainContainer
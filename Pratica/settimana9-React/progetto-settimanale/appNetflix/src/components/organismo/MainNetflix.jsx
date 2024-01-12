import { Container, Row } from "react-bootstrap"
import TvSection from "../molecola/TvSection"
import IconSection from "../molecola/IconSection"
import Gallery from "../molecola/Gallery"

const MainNetflix = () => {
  const styles = {
    minHeight: '75vh'
  }

  return (
    <>
      <Container fluid style={styles}>
        <Row className="px-4 py-4">
          <TvSection />
          <IconSection />
        </Row>
       <Gallery saga='Harry Potter'/>
       <Gallery saga= 'Star Wars' />
       <Gallery saga='Alien'/>
      </Container>
    </>
  )
}

export default MainNetflix
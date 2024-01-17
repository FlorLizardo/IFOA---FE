import { Container, Row } from "react-bootstrap"
import TvSection from "../molecola/TvSection"
import IconSection from "../molecola/IconSection"
import Gallery from "../molecola/Gallery"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const MainNetflix = ({saga, title}) => {
  const styles = {
    minHeight: '75vh'
  }

  // const [search, setSearch] = useState('')
  // const navigate = useNavigate()

  // const handleNavigate = () => {
  //   navigate('/results?cerca=' + search)
  // }

  return (
    <>
      <Container fluid style={styles}>
        <Row className="px-4 py-4">
          <TvSection title={title} />
          <IconSection />
        </Row>
        {saga.map((el, index) => <Gallery saga={el} key={index}/>)}
      </Container>
    </>
  )
}

export default MainNetflix
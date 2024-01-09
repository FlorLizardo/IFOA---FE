import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNav from './components/MyNav'
import { Container, Row } from 'react-bootstrap';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  const customStyles = {
    minHeight: '85vh'
  }


  return (
    <>
      <MyNav />
      <Container style={customStyles}>
        <Row>
          <Welcome />
        </Row>
        <Row>
          <AllTheBooks />
        </Row>
      </Container>
      <MyFooter fixed="bottom"/>
    </>
  )
}

export default App

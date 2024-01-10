import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter';
import MainContainer from './components/MainContainer';


function App() {
  return (
    <>
      <MyNav />
      <MainContainer />
      <MyFooter/>
    </>
  )
}

export default App

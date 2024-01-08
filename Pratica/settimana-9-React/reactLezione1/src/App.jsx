import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/Image'

function App() {
const title = 'Click me'
const altImage = 'image nature'
const srcImage = '../src/assets/image1.jpg'
const initialCounter = 3

  return (
    <>
      <h1>React: lezione 1</h1>
      <div className="card">
       <ButtonComponent titleButton={title} count={initialCounter} />
       <ImageComponent  srcImage={srcImage} altImage={altImage} />
      </div>
    </>
  )
}

export default App

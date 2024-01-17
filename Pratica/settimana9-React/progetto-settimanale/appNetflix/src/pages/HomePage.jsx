

import MainNetflix from '../components/organismo/MainNetflix';


function HomePage() {
  const saga = ['Harry Potter', 'Star Wars', 'Alien']
  
  return (
    <>
      <MainNetflix saga={saga} title='In tendenza'/>
    </>
  )
}

export default HomePage
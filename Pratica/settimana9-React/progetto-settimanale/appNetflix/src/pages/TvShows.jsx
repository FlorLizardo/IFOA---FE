import MainNetflix from "../components/organismo/MainNetflix"


const TvShows = () => {
  const styles = {
    minHeight: '85vh'
  }

  const saga = ['Friends', 'Futurama', 'Pokemon']

  return (
    <>
      <div style={styles}>
        <MainNetflix saga={saga} title='Tv Show'/>
     
      </div>
    </>
  )
}

export default TvShows
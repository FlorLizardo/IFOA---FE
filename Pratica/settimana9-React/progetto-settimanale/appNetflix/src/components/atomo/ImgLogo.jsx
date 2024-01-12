import imgLogo from '../../assets/img/netflix_logo.png'

const ImgLogo = () => {
  const styles = {
    width: '110px'
  }

  return (
    <div>
      <img src={imgLogo} alt="image logo" style={styles}/>
    </div>
  )
}

export default ImgLogo
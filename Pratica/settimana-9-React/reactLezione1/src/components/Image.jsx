import {React, Component} from "react";

const styles = {
  width: '20rem',
  marginTop: '2rem'
}
class ImageComponent extends Component {
  render() {
    return (
      <img src={this.props.srcImage} alt={this.props.altImage} style={styles}/>
    )
  }
}

export default ImageComponent

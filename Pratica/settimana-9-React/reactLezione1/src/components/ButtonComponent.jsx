import {React, useState} from 'react'

const ButtonComponent = (props) => {
  const styles = {
    border: '1px solid green'
  }

  // const [titleButton, setTitleButton] = useState(props.titleButton)
  const [count, setCount] = useState(props.count)

  return (
    <button style={styles} onClick={() => setCount((count) => count + 1)}>
      {props.titleButton || 'Premi il bottone'}: {count}
    </button>
  )
}

export default ButtonComponent
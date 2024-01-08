import {React, useState} from 'react'

const ButtonComponent = (props) => {
  const [titleButton, setTitleButton] = useState(props.titleButton)
  const [count, setCount] = useState(props.count)

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      {titleButton}: {count}
    </button>
  )
}

export default ButtonComponent
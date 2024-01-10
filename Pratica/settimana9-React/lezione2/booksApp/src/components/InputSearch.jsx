import {InputGroup, Form} from 'react-bootstrap'

const InputSearch = ({handleSearch}) => {
  return(
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm" >Search</InputGroup.Text>
      <Form.Control
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        onChange={handleSearch}
      />
    </InputGroup>
  )
}

export default InputSearch
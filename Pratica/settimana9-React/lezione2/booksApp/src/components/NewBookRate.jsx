import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const NewBookRate = ({postData}) => {
  const [newComment, setNewComment] = useState({
    comment: '',
    rate: ''
  })

  const sendData = () => {
    postData(newComment)
  }

  return (
    <div className="p-2 border mt-2">
      <small className='fw-medium'>LASCIA UNA RECENSIONE</small>
      <Form.Control type="text" placeholder="Scrivi una recensione..." className='my-3' value={newComment.comment} onChange={(e) => setNewComment({...newComment, comment: e.target.value})} />
      <Form.Select value={newComment.rate} onChange={(e) => setNewComment({...newComment, rate: e.target.value})}>
        <option>Seleziona il voto</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </Form.Select>
      <Button variant="outline-primary" size="sm" className="mt-3" onClick={() => sendData()}>
          Invia
      </Button>
    </div>
  )
  
}

export default NewBookRate
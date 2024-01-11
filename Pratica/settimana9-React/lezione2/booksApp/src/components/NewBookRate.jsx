import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const NewBookRate = ({asin}) => {
  const [newComment, setNewComment] = useState({
    comment: '',
    rate: ''
  })

  const myToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjZlZGMwNTgzNTAwMTg1MjJjY2QiLCJpYXQiOjE3MDQ4NzE1MDksImV4cCI6MTcwNjA4MTEwOX0.nXK3g9EYqBCVAeJHGaZMQOGgla5nfVDnCXZeEa5XVnU";

  const postData = async () => {
    try{
      const resp = await fetch ('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        body: JSON.stringify({...newComment, elementId: asin}),
        headers: {
          'Content-Type': 'application/json',
          Authorization: myToken
        }
      })
      if(resp.ok) {
        console.log('ok');
      }else {
        console.log('error');
      }
    }
    catch(error) {
      console.log(error);
    }
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
      <Button variant="outline-primary" size="sm" className="mt-3" onClick={() => postData()}>
          Invia
      </Button>
    </div>
  )
  
}

export default NewBookRate
import { Modal, Button } from 'react-bootstrap'
import SpinnerWait from './SpinnerWait'
import { useEffect, useState } from 'react'
import SingleComment from './SingleComment'
import NewBookRate from './NewBookRate'

const CommentArea = ({asin}) => {
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false)
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const fetchData = async () => {
    try{
      setIsLoading(true)
      const resp = await fetch('https://striveschool-api.herokuapp.com/api/books/' + asin + '/comments', {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjZlZGMwNTgzNTAwMTg1MjJjY2QiLCJpYXQiOjE3MDQ4NzE1MDksImV4cCI6MTcwNjA4MTEwOX0.nXK3g9EYqBCVAeJHGaZMQOGgla5nfVDnCXZeEa5XVnU"
        },
      })
      if(resp.ok) {
        let data = await resp.json()
        setComments(data)
        setIsLoading(false)
      }else {
        console.log('error');
        setIsLoading(false)
        setError(true)
      }
    }
    catch(error) {
      console.log(error);
      setIsLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return(
    <div style={styles}>
{/* 
            <h3>Commenti</h3>

            {isLoading && <SpinnerWait />}
            {comments?.length > 0
              ? comments.map((comment, index) => <SingleComment comment={comment} key={index} />)
              : <p>Non ci sono commenti</p>
            }
            <NewBookRate asin={asin}/> */}
     

      <div className="modal show" style={{ display: 'block', position: 'initial'}}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Commenti</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {isLoading && <SpinnerWait />}
          {comments?.length > 0
            ? comments.map((comment, index) => <SingleComment comment={comment} key={index} />)
            : <p className='ps-2 fw-medium'>Non ci sono commenti</p>
          }
          <NewBookRate asin={asin}/>
        </Modal.Body>
      </Modal.Dialog>
      </div>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Commenti</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {isLoading && <SpinnerWait />}
          {comments?.length > 0
            ? comments.map((comment, index) => <SingleComment comment={comment} key={index} />)
            : <p>Non ci sono commenti</p>
          }
          <NewBookRate asin={asin} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  )
}

const styles = {
  width: '280px', 
  backgroundColor: '#E4E6E7',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '3px'
}

export default CommentArea
const SingleComment = ({comment}) => {
  const myToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjZlZGMwNTgzNTAwMTg1MjJjY2QiLCJpYXQiOjE3MDQ4NzE1MDksImV4cCI6MTcwNjA4MTEwOX0.nXK3g9EYqBCVAeJHGaZMQOGgla5nfVDnCXZeEa5XVnU";

  const deleteData = async (asin) => {
    try{
      const resp = await fetch ('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
        method: 'DELETE',
        headers: {
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
    <div className="d-flex justify-content-between">
      <div>
        <small className="pe-1"><i className="fa-solid fa-heart pe-1"></i>{comment.rate}</small>
        <small className="ps-2">{comment.comment}</small>
      </div>
      <div>
      <i className="fa-solid fa-trash text-danger ps-3" onClick={() => deleteData(comment._id)}></i>
      </div>
    </div>
  )
}

export default SingleComment
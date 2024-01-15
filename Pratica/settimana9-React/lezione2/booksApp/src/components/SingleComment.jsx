const SingleComment = ({comment, deleteData}) => {
  const styles = {
    cursor: 'pointer'
  }

  return (
    <div className="d-flex justify-content-between">
      <div>
        <small className="pe-1"><i className="fa-solid fa-heart pe-1"></i>{comment.rate}</small>
        <small className="ps-2">{comment.comment}</small>
      </div>
      <div >
      <i className="fa-solid fa-trash text-danger ps-3" style={styles} onClick={() => deleteData(comment._id)}></i>
      </div>
    </div>
  )
}

export default SingleComment


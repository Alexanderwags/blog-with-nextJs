import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Axios from "axios"
import Link from "next/link"
function Comments({ id }) {
  const [comments, setComments] = useState()
  const [number, setNumber] = useState(0)
  const requestComments = async () => {
    const resp = await Axios.get(`${process.env.API_BLOG}/posts/${id}/comments`)
    setComments(resp.data)
  }
  useEffect(() => {
    requestComments()
  }, [number])
  if (!comments) {
    return (
      <div>
        <a
          onClick={() => {
            setNumber(number + 1)
          }}>
          Load Comments
        </a>
      </div>
    )
  }
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((c, i) => {
        return (
          <div key={c.id}>
            <h3>{c.email}</h3>
            <p>{c.body}</p>
          </div>
        )
      })}
    </div>
  )
}

Comments.propTypes = {
  id: PropTypes.number,
}

export default Comments

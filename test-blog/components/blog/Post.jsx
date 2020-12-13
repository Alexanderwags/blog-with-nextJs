import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
function Post({ post }) {
  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <span>{`writed for user ${post?.userId}`}</span>
      <Link href={`/blog/${post.id}`}>read more</Link>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.any,
}

export default Post

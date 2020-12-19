import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
function Post({ post }) {
  return (
    <article className="s-radius-1 s-pxy-4 s-shadow-bottom s-relative course-card background s-shadow-card-micro white-color nowrap s-column s-mb-0">
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <span>{`writed for user ${post?.userId}`}</span>
      <Link href={`/blog/${post.id}`}>read more</Link>
    </article>
  )
}

Post.propTypes = {
  post: PropTypes.any,
}

export default Post

import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <h6 className="text-center">Постов пока нет</h6>
  }
  return posts.map((post) => <Post post={post} key={post} />)
}

export default Posts

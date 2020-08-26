import React, { useReducer } from 'react'

const BlogContext = React.createContext()

const blogActionTypes = {
  ADD: 'ADD_BLOGPOST',
}

const blogReducer = (state, action) => {
  switch(action.type) {
    case blogActionTypes.ADD:
      return [...state, { title: `Blog Post #${state.length + 1}` }]
    default:
      return state
  }
}

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, [])

  const addBlogPost = () => {
    dispatch({ type: blogActionTypes.ADD })
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext

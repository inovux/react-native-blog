import React  from 'react'
import createDataContext from "./createDataContext";

const blogActionTypes = {
  ADD: 'ADD_BLOGPOST',
  DELETE: 'DELETE_BLOGPOST',
}

const blogReducer = (state, action) => {
  switch(action.type) {
    case blogActionTypes.DELETE:
      return state.filter((blogPost) => blogPost.id !== action.payload)
    case blogActionTypes.ADD:
      return [...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        }
      ]
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return (title, content) => {
    dispatch({ type: blogActionTypes.ADD, payload: { title, content } })
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch(
      {
        type: blogActionTypes.DELETE,
        payload: id
      }
    )
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
)

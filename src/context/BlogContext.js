import React  from 'react'
import createDataContext from "./createDataContext";

const blogActionTypes = {
  ADD: 'ADD_BLOGPOST',
}

const blogReducer = (state, action) => {
  switch(action.type) {
    case blogActionTypes.ADD:
      return [...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`
        }
      ]
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: blogActionTypes.ADD })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
)

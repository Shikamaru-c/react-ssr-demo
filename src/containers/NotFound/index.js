import React from 'react'

export default (props) => {
  const { staticContext } = props
  staticContext && (staticContext.NotFound = true)
  return (
    <div>404 Not Found.</div>
  )
}
import React from 'react'

const Container = ({ children, type }) => {
  return (
    <div className={`container ${type === 'highlight' && 'container--highlight'}`}>
      {children}
    </div>
  )
}

export default Container

import React from 'react'

const Filter = ({onFilter}) => {
    const HandleFilter = (filter) => {
        onFilter(filter)
    }
  return (
    <div className="controls">
    <div className="filters">
      <button onClick={()=>{HandleFilter("all")}} className="all" id="all">All</button>
      <button onClick={()=>{HandleFilter("pending")}} className="pending">Pending</button>
      <button onClick={()=>{HandleFilter("done")}} className="done-b">Done</button>
    </div>
  </div>  )
}

export default Filter
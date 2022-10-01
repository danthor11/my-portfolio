import React from 'react'

const TopButton = () => {
  return (
    <button 
        className='p-4 rounded-full absolute right-8 font-bold bg-blue-500 transition-colors hover:bg-blue-400'
        onClick={() => {
            window.scroll({
            top:0
            })
        }}
    >
        Top
    </button>
  )
}

export default TopButton
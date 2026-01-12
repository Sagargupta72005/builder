import React from 'react'

const Lod = () => {
  return (
    <div>
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce [animation-delay:200ms]"></div>
      <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce [animation-delay:400ms]"></div>
    </div>

      
    </div>
  )
}

export default Lod

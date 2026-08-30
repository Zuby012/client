
import React from 'react'

const heroCard = (title: string, description: string) => {
  return (
    <div className="bg-white text-gray-800 p-5 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  )
}

export default heroCard
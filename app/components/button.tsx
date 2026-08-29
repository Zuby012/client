import React from 'react'

const Button = (content: string) => {
    return (
        <div className="flex flex-col items-center justify-center h-8 px-5 rounded-md bg-indigo-800 text-white shadow-lg hover:scale-105 active:scale-80 duration-500">
            {content}
        </div>
    )
}

export default Button
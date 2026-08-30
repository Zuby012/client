'use client'
import React from 'react'

const Button = ({ content, colour, text, hoverColor, responsiveWidth }: { content: string, colour: string, text: string, hoverColor?: string, responsiveWidth?: string | "w-60" }) => {
    return (
        <div className={`w-full flex items-center justify-center my-5`}>
            <button className={`w-full md:${responsiveWidth} p-2 rounded-md ${colour} ${text} hover:${hoverColor} active:bg-indigo-400`}>
                {content}
            </button>
        </div>
    )
}

export default Button
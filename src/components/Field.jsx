import React from 'react'

const Field = (props) => {
    return (
        <>
            <div className={`p-2 mb-4 rounded-xl w-64 relative ${props.hl ? "bg-red-100" : null}`}>
                <label htmlFor="n" className="block text-gray-600 font-semibold mb-2">{props.label}</label>
                {props.children}
            </div>
        </>
    )
}

export default Field
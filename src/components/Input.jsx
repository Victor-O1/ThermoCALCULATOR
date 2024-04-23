import React from 'react'

const Input = (props) => {
    return (
        <>
            {/* <div class="w-64 relative">
        <input type="text" class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Enter your text...">props.children</input>
      </div> */}
            <input type="text" value={props.value} onChange={(e) => setn(e.target.value)}
                class="border border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">props.children</input>
        </>
    )
}

export default Input
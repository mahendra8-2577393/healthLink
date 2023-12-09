import React from 'react'

const Button2 = (props) => {
    let string=props.btn2
  return (
    <div>
        <button className='bg-black p-2 px-2 rounded-md text-white'>
           {string}
        </button>
    </div>
  )
}

export default Button2
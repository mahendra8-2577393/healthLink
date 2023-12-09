import React from 'react'

const Button1 = (props) => {
    let str=props.btn1;
  return (
    <div className='border p-2 px-2 rounded-md border-black'>
        {str}
    </div>
  )
}

export default Button1
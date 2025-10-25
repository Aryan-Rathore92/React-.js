import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams(); // Hook( Use this for asign our value into URL and print User page)
  return (
    <div className='bg-gray-500 text-white text-3xl p-4 '>User: {userid}</div>
  )
}

export default User;
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom' // Hook(This hook does start the featching before reach at that page)

function  GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Aryan-Rathore92') // My Github api
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data); 
    //         setData(data)
    //     })
    // }, [])
  return (
    <div  className='bg-gray-200 text-gray-900 text-3xl p-4 '>
        Github Followers:{data.followers}
        <img src= {data.avatar_url} alt="Git Picture" width={300}
        className='pt-10 mx-auto'
        />
        </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Aryan-Rathore92')
    return response.json()
}
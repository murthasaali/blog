import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
const create=()=>{

  navigate('/create')
}
const reade=()=>{
  navigate('/blog')
}

  return (
    <div>
      <div className='create'>
      <h1>
                    express your own opinion
                </h1>

<button onClick={create}>create blog</button>
<button onClick={reade}>read blog</button>
      </div>


    </div>
  )
}

export default Home
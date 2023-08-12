import React, { useContext } from 'react'
import { BlogContext } from './context'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Showblog() {
    const {post}=useContext(BlogContext)
    const {id}=useParams()
    const navigate=useNavigate()
  return (
    <div>
        <div className='show'>

      <h1>
        {
            post[id].titles
        }
        </h1>
      <p className='para'>
        {
            post[id].contents
        }
        </p>
        <div className='boots'>

        <button onClick={()=>navigate('/')} style={{
            width:"80px"
        }}>home</button>
        {/* <br> */}
        <button onClick={()=>navigate('/create')} 
        style={{
            width:"80px"
        }}>blogs</button>
        
        </div>
        </div>

    </div>
  )
}

export default Showblog
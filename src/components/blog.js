import React, { useContext } from 'react'
import { BlogContext } from './context'
import { useNavigate } from 'react-router-dom'
function Blog() {
  const { post } = useContext(BlogContext)
  const navigate = useNavigate()

  return (
    <div>
      <h1>blogs</h1>
      <div className='boxes'>

      <ul >
        {
          post.map((value, index) => {
            return <li key={index}>{value.titles}
              <button onClick={() => navigate(`/showblog/${index}`)
              } className='showbut'>show</button></li>
            })
          }
      </ul>
          </div>
    </div>
  )
}

export default Blog
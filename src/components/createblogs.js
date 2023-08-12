import React, { useContext } from 'react'
import { BlogContext } from './context';
import { useNavigate } from 'react-router-dom';



function Createblogs() {
    const navigate = useNavigate()
    const { setPost, post } = useContext(BlogContext)
    const saved = (e) => {
        e.preventDefault()
        const blogtitle = e.target.title.value;

        const blogcontent = e.target.content.value;

        setPost([...post, { titles: blogtitle, contents: blogcontent }])

        navigate('/blog');
        // console.log(post)
    }
    return (
        <div>
            <div className='createblog'>

            <form onSubmit={saved}>
               <h1>Create</h1>
               <div className='text'>

                <input type='text' placeholder='title' name='title' />
                <textarea placeholder='content' name='content' />
                <button type='submit'>submit</button>
               </div>
            </form>
            </div>
        </div>
    )
}

export default Createblogs
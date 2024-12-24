import React from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

const Blogdetails = () => {
    const {id} = useParams ();
    const { data: blog, isPending } = useFetch("http://localhost:8000/blogPosts/" + id);
    const history = useHistory()

    const handleDelete = () => {
        fetch("http://localhost:8000/blogPosts/" + id, {
            method: "DELETE"
        }).then(() => {
       history.push('/');
        })
    }
    return ( 
        <div className='blog-details'>
            {isPending && <p>Loading...</p>}
            {blog && ( 
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default Blogdetails;
import React from 'react';
import useFetch from './useFetch';
import Bloglist from "./Bloglist";

const Home = () => {
    const {data: blogs, ispending} = useFetch("http://localhost:8000/blogPosts")
     
    return (  
        <div>
            {ispending && <p>Loading...</p>}
            {blogs && <Bloglist blogs = {blogs}  title="All Blogs"/>}
            </div>
    );
}
 
export default Home;
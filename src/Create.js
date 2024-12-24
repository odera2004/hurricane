import React from "react";
import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, SetBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, body, author };
        
        setIsPending(true);
        fetch("http://localhost:8000/blogPosts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
        }).then(() => {
            console.log("New post added!");
            setIsPending(false);
        })

        fetch("http://localhost:8000/blogPosts", {
            method : "DELETE"  
    
        }).then(() => {
            console.log("post deleted!");
        })
    }
    return (  
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text"
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                  required
                  value = {body}
                  onChange = {(e) => SetBody(e.target.value)}>
                </textarea>
                <label>Blog author:</label>
                <select
                value = {author}
                onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}

            </form>
        </div>
    );
}
 
export default Create;
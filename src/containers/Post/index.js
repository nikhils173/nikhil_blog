import React from 'react';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
import './style.css';

const Post = (props) => {
    console.log(props);
    return (
        <div>
            <section className="container">
                <BlogPost {...props}/>
                <Sidebar {...props} />
            </section>
        </div>
    )
}

export default Post

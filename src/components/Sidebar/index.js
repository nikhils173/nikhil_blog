import React,{useState,useEffect} from 'react';
import Cards from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';


const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        const posts = blogPost.data;
        setPosts(posts)
        
    },posts);

    return (
        <div className="sidebarContainer">
            <Cards style={{marginBottom:'20px'}}>
                <div className="cardHeader">
                    <span> About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require("../../blogPostImages/img11.jpg")} alt="Post image" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is nikhil singh and i am software developer</p>
                </div>
            </Cards>

            <Cards>
                <div className="cardHeader">
                    <span> Social Network</span>
                </div>
            </Cards>

            <Cards>
                <div className="cardHeader">
                    <span> Recent Posts</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.map(post=>{
                            return(
                                <NavLink to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                                
                                    
                
                            );

                        })
                    }
                </div>
            </Cards>
         </div>     
    )
}

export default Sidebar

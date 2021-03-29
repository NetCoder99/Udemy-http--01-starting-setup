import React, { useState, useEffect, Component } from "react";

import {getPosts} from '../../apiCalls/getPostsFnc.js';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {


    state = {
        posts: [],
        updatedPosts: [],
        selectedPostId: null
    }

    componentWillMount() {
        console.log("+ componentWillMount");
    }

    componentDidMount() {
        console.log("+ componentDidMount");
        getPosts.call(this);
    }

    postSelectedHandler = (id) => {
        console.log("+ postSelectedHandler");
        this.setState({selectedPostId: id});
    }

    render () {
        console.log("++ render");

        const posts = this.state.posts.map(post => {
            return <Post 
                key    = {post.id}
                postId = {post.id}
                userId = {post.userId}
                title  = {post.title}
                author = {post.author}
                clicked={() => this.postSelectedHandler(post.id)}
                />;
        });

        return (
            <div>
                <section className="Posts">
                    {posts}            
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
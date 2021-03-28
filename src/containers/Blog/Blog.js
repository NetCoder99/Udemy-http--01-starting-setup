import React, { useState, useEffect, Component } from "react";

//import axios from 'axios';

import {getPosts} from '../../apiCalls/getPosts.js';
import {getAuthors} from '../../apiCalls/getAuthorsFnc.js';


import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {


    state = {
        authors: [],
        posts: [],
        updatedPosts: [],
        selectedPostId: null
    }

    componentWillMount() {
        console.log("++componentWillMount");
        getAuthors.call(this);
        getPosts.call(this);
    }

    componentDidMount() {
        console.log("++componentDidMount");
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {

        console.log("++ render");

        getAuthors.call(this);
        getPosts.call(this);

        const authors = this.state.authors;
        console.log("+++ authors length: " + authors.length);

        const posts = this.state.posts.map(post => {
            const indexOfUser = authors.map(x => x.id).indexOf(parseInt(post.userId));
            console.log("+++ indexOfUser: " + indexOfUser);
            return <Post 
                key    = {post.id}
                postId = {post.id}
                userId = {post.userId}
                title  = {post.title}
                author = {authors[indexOfUser].name}
                //author={post.author}
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
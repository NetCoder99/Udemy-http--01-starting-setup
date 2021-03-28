//import React, { useState, Component } from 'react';
import axios from 'axios';
//import {getAuthors} from './getAuthorsFnc.js';
import {getLink} from './getLinkFnc.js';

export function getPosts() {
    console.log("++getPosts");

    //getAuthors.call(this);
    console.log("-- authors length: " + this.state.authors.length);

    axios.get(getLink() + '/posts')
    .then(response => { 
        const posts = response.data.slice(0,6);
        const updatedPosts = posts.map(post => {
            return {
                ...post, author:null
            }
        })

        this.setState({posts: updatedPosts});
    });
}

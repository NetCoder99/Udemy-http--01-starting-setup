import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>Title:  {props.title}</h1>
        <h3>PostId: {props.postId}</h3>
        <h3>UserId: {props.userId}</h3>
        <h3>Author: {props.author}</h3>
    </article>
);

export default post;
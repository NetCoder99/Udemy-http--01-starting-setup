import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>Title:  {props.title}</h1>
        <h1>PostId: {props.postId}</h1>
        <h1>UserId: {props.userId}</h1>
        <h1>Author: {props.author}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;
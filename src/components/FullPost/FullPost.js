import React, { Component } from 'react';
import './FullPost.css';

import axios from 'axios';
import {getLink} from '../../apiCalls/getLinkFnc.js';
 
class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate(){
        console.log('++ componentDidUpdate');
        console.log('++ this.props.id: ' + this.props.id);
        console.log('++ this.state.loadedPost: ' + this.state.loadedPost);

        if ( this.props.id != null &&  (this.state.loadedPost == null || this.state.loadedPost.id != this.props.id)) { 
            console.log('++ fetching post for: ' + this.props.id);
            axios.get(getLink() + '/posts/' + this.props.id)
            .then(response => {
                console.log('+++ setting loadedPost: ' + response.data);
                this.setState({loadedPost: response.data});
            })
            .catch(error => {
                console.log('+++ axios error: ' + error);
                const errorRec = {
                    title: error.message
                };
                this.setState({loadedPost: errorRec});
            });
        }
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id)
        {
            post = <p style={{textAlign: 'center'}}>Loading selected post ...</p>;
        }

        if (this.state.loadedPost)
        {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
    
        }

        return post;
    }
}

export default FullPost;
import axios from 'axios';
import {getLink} from './getLinkFnc.js';

let getPostsCall = getLink() + '/posts';
let getUsersCall = getLink() + '/users';

export function getPosts() 
{
    console.log("++getPosts");

    const postsRequest = axios.get(getPostsCall);
    const usersRequest = axios.get(getUsersCall);

    axios
        .all([postsRequest, usersRequest])
        .then(
            axios.spread((...responses) => 
            {
                const postsResponse = responses[0].data.slice(0, 6);
                const usersResponse = responses[1].data;

                console.log(postsResponse, usersResponse);

                const updatedPosts = postsResponse.map(postRecord =>  {

                    const indexOfUser = usersResponse.map(x => x.id).indexOf(parseInt(postRecord.userId));
                    console.log("++++ indexOfUser: " + indexOfUser);

                    return {
                        userId: postRecord.userId,
                        id:     postRecord.id,
                        title:  postRecord.title,
                        body:   postRecord.body,
                        author: usersResponse[indexOfUser].name
                    }
            })
            console.log("++++ setting updatedPosts");
            this.setState({posts: updatedPosts});
        })
    )
    .catch(errors => {
      console.error(errors);
    });
}

import {FETCH_POSTS, FETCH_USERS} from  './types';
import {FETCH_COMMENTS} from  './types'; 

export const  fetchPosts = () => dispatch => {

        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then (res=> res.json())
        .then(data=> dispatch ({
            type: FETCH_POSTS,
            payload: data
      }
       
        )
          )
        }
       
   
  
        
    export const  fetchComments = () => dispatch => {
        
                  fetch ('https://jsonplaceholder.typicode.com/comments')
                  .then (res=> res.json())
                  .then(data=> dispatch ({
                      type: FETCH_COMMENTS,
                      payload: data
                }
                 
                  )  )
                  }
                        
    export const  fetchUsers = () => dispatch => {
        
                  fetch ('https://jsonplaceholder.typicode.com/users')
                  .then (res=> res.json())
                  .then(data=> dispatch ({
                      type: FETCH_USERS,
                      payload: data
                }
                 
                  )  )
                  }
                        
          
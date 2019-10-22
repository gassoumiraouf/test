import React from 'react';
const CommentItem = ({comment}) => {
    return ( 
        <div>
                <div className="card"  key ={comment.id}>
         
         <img src="https://www.pinclipart.com/picdir/middle/199-1992123_youtube-comment-png-banner-logo-comment-youtube-png.png" className="card-img-top" alt="..."/>
         
        <div className="card-body">
           <h5 className="card-title">{comment.email}</h5>
           <p className="card-text">{comment.body}</p>
           
           
         </div>
       </div>
        </div>
     );
}
 
export default CommentItem;
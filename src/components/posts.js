import React, { Component } from 'react';
import PostItem from './postItem';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/actions';

import { Link } from "react-router-dom";

class Posts extends Component {
   
    componentDidMount () {
        this.props.fetchPosts()
    }
      
    render() { 
        const filteredPosts = this.props.posts.filter(el => String(el.userId) === this.props.match.params.userId)
        return (
            <div className='container'>
            <ul className='d-flex flex-wrap'>

         {filteredPosts.map( (post,index)=> <li key={index} ><PostItem post={post} />
         <Link to={`/comment/${post.id}`} className="btn btn-primary">view comments</Link>
         </li>  )
        }
            </ul>
        </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        posts:state.posts
    }
}

export default connect (mapStateToProps, {fetchPosts}) (Posts);

import React, { Component } from 'react';
import CommentItem from './commentItem';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/actions'
class Comments extends Component {
   
    componentDidMount () {
        this.props.fetchComments()
    }
        
    render() { 
        const filteredcomments = this.props.comments.filter(el => String(el.postId) === this.props.match.params.postId)  
    
        return (  <div className='container'>
            <ul className='d-flex flex-wrap'>

         {filteredcomments.map( (comment,index)=> <li key={index} ><CommentItem comment={comment} /></li>  )
        }
            </ul>
        </div>);
    }
}
const mapStateToProps = state => {
    return {
        comments:state.comments
    }
}

export default connect (mapStateToProps, {fetchComments}) (Comments);

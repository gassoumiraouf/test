import React, { Component } from 'react'
import { fetchUsers } from '../actions/actions';
import User from './User'
import { connect } from 'react-redux';

class UserList extends Component{
    componentDidMount() {
        this.props.fetchUsers()
    }
    
    render(){
        return ( 
            <div className='container d-flex flex-wrap'>
                {
                    this.props.users.map(user => <User user={user}/>)
                }                
            </div>
         );
    }
}
const mapStateToProps = state => {
    return{
        users: state.users
    }
}
export default connect(mapStateToProps, {fetchUsers})(UserList);
import {FETCH_COMMENTS} from  '../actions/types'

 const commentReducer =(state = [] , action)=>{
switch (action.type){
    case FETCH_COMMENTS: {
       return action.payload ;
    }
    default :
    return state
} 
}

export default commentReducer
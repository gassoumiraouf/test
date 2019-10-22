import React from 'react';
import './App.css';
import Posts from './components/posts'
import { BrowserRouter, Route } from 'react-router-dom'
import UserList from './components/UserList'
import Comments from './components/comments'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
<Route exact path="/" component={UserList}/>
<Route exact path="/posts/:userId" component={Posts}/>
<Route exact path="/comment/:postId" component={Comments}/>

{/* <Posts/> */}
 
 </div>
 </BrowserRouter>
  );
}

export default App;

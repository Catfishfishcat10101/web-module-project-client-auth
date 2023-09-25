import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import FriendList from './FriendList';
import AddFriend from './AddFriend';
import LogoutButton from './components/Logout';

function App() {
  return (
    <Router>
    <div className="App">
      <h2>Client Auth Project</h2>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/friends' component={FriendList} />
        <Route path='/add-friend' component={AddFriend} />
      <Login />
      <FriendList />
      <AddFriend />
      </Switch>
      <LogoutButton />
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import FriendList from './FriendList';
import AddFriend from './AddFriend';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <Login />
      <FriendList />
      <AddFriend />
      <LogoutButton />
    </div>
  );
}

export default App;

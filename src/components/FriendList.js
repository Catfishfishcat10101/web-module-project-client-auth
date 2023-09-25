import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FriendList() {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_URL = 'http://localhost:3000/api/friends';

        axios.get(API_URL)
        .then(response => {
            setFriends(response.data);
            setLoading(false);
        });
    }; []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Friends List</h2>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id}>{friend.name}</li>

                ))}
            </ul>
        </div>
    );
 }

 export default FriendList;

import React, { useState } from 'react';
import axios from 'axios';

function AddFriend() {
    const [friendName, setFriendName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const API_URL = 'http://localhost:3000/api/friends';

        axios.post(API_URL, {
            name: friendName
        })
        .then(response => {
            setMessage('Friend added sucessfully!');
            setFriendName('');
        })
        .catch(err => {
            setMessage('Error adding friend.');
        });
    };

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Friend's Name:
                    <input
                    type='text'
                    value={friendName}
                    onChange={(e) => setFriendName(e.target.value)}
                    required
                    />
                    </label>
                      <button type='submit'>Add</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AddFriend;
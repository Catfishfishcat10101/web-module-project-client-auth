import React from 'react';


function LogoutButton(props) {
    const handleLogout = () => {
        localStorage.removeItem('authToken');
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

export default LogoutButton
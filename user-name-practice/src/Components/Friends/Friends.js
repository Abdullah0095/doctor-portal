import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: '1px solid maroon',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h1>ID: <Link to={`/friend/${id}`}>Information about  {id}</Link></h1>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>

        </div>
    );
};

export default Friends;
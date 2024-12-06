import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUser] = useState(loadedUsers);

    return (
        <div>
            <h2>Users: {users.length}</h2>
        </div>
    );
};

export default Users;
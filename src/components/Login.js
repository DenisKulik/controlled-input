import { useState } from 'react';

export default function Login() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();

        const userData = {
            username,
            password,
        };
        console.log(userData);

        e.target.username.value = '';
        e.target.password.value = '';
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Username:
                    <input type="text" value={username}
                           onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>Password:
                    <input type="password" value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}
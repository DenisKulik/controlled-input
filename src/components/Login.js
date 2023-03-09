import { useState } from 'react';

export default function Login() {
    const [ data, setData ] = useState({ username: '', password: '' });

    function handleFormSubmit(e) {
        e.preventDefault();

        console.log(data);

        setData({ username: '', password: '' });
    }

    function handleInputChange(text, name) {
        setData({ ...data, [name]: text });
    }


    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Username:
                    <input type="text" value={data.username}
                           onChange={(e) => handleInputChange(e.target.value,
                               'username')}
                    />
                </label>
                <label>Password:
                    <input type="password" value={data.password}
                           onChange={(e) => handleInputChange(e.target.value,
                               'password')}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}
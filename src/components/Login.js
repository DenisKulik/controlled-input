export default function Login() {
    function handleFormSubmit(e) {
        e.preventDefault();

        const userData = {
            username: e.target.username.value,
            password: e.target.password.value
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
                    <input type="text" name="username"/>
                </label>
                <label>Password:
                    <input type="password" name="password"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}
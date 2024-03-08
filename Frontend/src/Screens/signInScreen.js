const signInScreen = {
    after_render: () => {

    },

    render: () => {
        return `
            <div class="form-container">
                <form id="signin-form">
                    <ul class="form-items">
                        <li><h1>Sign-In</h1></li>
                        <li>
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email"/>
                        </li>
                        <li>
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password"/>
                        </li>
                        <li><button class="primary">Signin</button></li>
                        <li>
                            <div>
                                New User?
                                <a href="/#/register">Create your account</a>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
        `
    }
}


export default signInScreen
import React from 'react';

class SingUp extends React.Component {
    constructor() {
        super();//es6

        this.handlerForm = this.handlerForm.bind(this);
    }

    handlerForm(e) {
        e.preventDefault();

        let username = this.refs.username.value,
            email = this.refs.email.value,
            password = this.refs.password.value;

        Accounts.createUser({
            username:username,
            email:email,
            password:password,

        });
        console.log(1);
        FlowRouter.go('/eng');
    }

    render() {
        return (
            <div id="singup" name="singup">
                <h2>SingUp</h2>
                <form onSubmit={this.handlerForm} className="register">
                    <p> <input type="username" ref="username" name="username" placeholder="Username:"/></p>
                    <p> <input type="email" ref="email" name="email" placeholder="Email:"/></p>
                    <p> <input type="password"  ref="password" name="password" placeholder="Password:"/></p>
                    <p><input type="submit" value="Register"/></p>
                </form>
            </div>
        )
    }
}


export default SingUp;
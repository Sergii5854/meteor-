import React from 'react';

class SingIn extends React.Component {
    constructor() {
        super();//es6

        this.handlerForm = this.handlerForm.bind(this);
    }

    handlerForm(e) {
        e.preventDefault();

        let email = this.refs.email.value;
        let password = this.refs.password.value;

            Meteor.loginWithPassword(email, password, (error) =>{
                if(error) {
                    console.log(error.reason);
                }else{

                    FlowRouter.go('/eng');
                }
            }

        )

    }

    render() {
        return (
            <div id="singin" name="singin">
                <h2>SingIn</h2>
                <form onSubmit={this.handlerForm} className="register">
                    <p> <input type="email" ref="email" name="email" placeholder="Email: "/></p>
                    <p> <input type="password" ref="password" name="password" placeholder="Password"/></p>
                    <p><input type="submit" value="Register"/></p>
                </form>
            </div>
        )
    }
}


export default SingIn;
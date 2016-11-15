import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


class App extends React.Component {
    render() {
        return (
            <div className="app-root">
                <div className="container">
                    <h2>POWERFULL SKILLS</h2>
                    <div id="reg">
                        <a id="s_in" href="singin">SingIn</a>
                        <a id="s_up" href="singup">SingUp</a>
                    </div>
                    {
                        (
                            () => {
                                let a = 0;

                            }
                        )()
                    }

                    <hr></hr>
                        <div id="logo">
                            <img src="img/logo.png"/><br></br>
                            <span>Make your English strong<br/> like a HULK</span>
                        </div>
                </div>
            </div>

        );
    }
};
/*export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
});*/
export default App;
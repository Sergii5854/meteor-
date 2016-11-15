import React, {Component, PropTypes} from "react";
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from "meteor/meteor";

class AppEng extends React.Component {


    render() {
        if(this.props.isLoading){
        return (
            <div>
                <div id="logoeng">
                    <img src="img/logo.png"/>
                    <h2 id="maintext"><span>Make your English strong like a HULK</span></h2>
                </div>


                <div id="userbox">
                    <div className="profile-userpic" id="userimg">
                        <img src={this.props.user.avaUrl ? this.props.user.avaUrl : "/img/user.png" }/>
                    </div>
                    <ol id="username">
                        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        <h3> {this.props.user.username}  </h3>
                        <span id="usernamesetting" className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    </ol>

                    <ol>
                        <span className="glyphicon glyphicon-book" ></span>
                        <a href="/vocabruary">Vocabruary</a>
                    </ol>
                    <ol>
                        <span className="glyphicon glyphicon-check" aria-hidden="true"></span>
                        <a href="/training">Training</a>
                    </ol>
                    <ol>
                        <span className="glyphicon glyphicon-floppy-saved" aria-hidden="true"></span>
                        <a href="/addwords">Add Words</a>
                    </ol>
                    <ol>
                        <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        <a href="/settings">Acount Setting</a>
                    </ol>

                    <ol>
                        <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                        <a href="/logout" value="&#10007 " >Logout</a>
                    </ol>

                    <span id="teza">Make your English strong like a <b>HULK</b> </span>
                </div>


                <div id="quezbox">
                    {/*<img  src="img/logo.png"/>*/}
                    {this.props.yieldTwo}
                </div>
            </div>

        )
    }else{
            return(
                <div>Loading ...</div>
            )
        }
    }
}


export default AppEngContainer = createContainer(() => {
    const subscribe =  Meteor.subscribe("user");
    return {
        isLoading: subscribe.ready(),
        user: Meteor.users.findOne() || {}
    };
}, AppEng);
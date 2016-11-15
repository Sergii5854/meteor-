import React, {Component, PropTypes} from "react";
import {FormGroup, ControlLabel, Button} from "react-bootstrap";
import {createContainer} from "meteor/react-meteor-data";


class Info extends Component {

    handleSubmit(event) {
        event.preventDefault();

        let username = this.refs.username.value.trim(),
            email = this.refs.email.value.trim();

        if (username) {
            Meteor.call('user.changeUsername', username);
        }
        if (email) {
            Meteor.call('user.changeEmail', email);
        }

        this.refs.username.value = '';
        this.refs.email.value = '';
    }

    render() {
        if(this.props.isLoading){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                    <ControlLabel id="info">Username : {this.props.user.username} </ControlLabel>
                    {' '}
                    <input className="form-control" ref="username" type="text" placeholder= {"Chaange user name: " + this.props.user.username}/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    {' '}
                    <input className="form-control" ref="email" type="text" placeholder= {"Chaange you email: " + this.props.user.emails[0].address}/>
                </FormGroup>
                <Button type="submit">
                    Submit changes
                </Button>
            </form>
        )}else {
            return(<div>Loading ...</div>)
        }
    }
}

export default  createContainer(() => {
    let isLoading =  Meteor.subscribe('user').ready();
    return {
        isLoading,
        user: Meteor.users.findOne()|| {}
    }
}, Info);
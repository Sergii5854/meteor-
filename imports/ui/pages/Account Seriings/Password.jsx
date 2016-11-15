import React, {Component, PropTypes} from "react";
import {FormGroup, ControlLabel, Button, Popover} from "react-bootstrap";
import {createContainer} from "meteor/react-meteor-data";
import {Accounts} from 'meteor/accounts-base'


class Password extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            msg: '',
            tooltip: false
        }
    }

    handleSubmit(e) {

        e.preventDefault();

        let pas = this.refs.pas.value.trim(),
            npas = this.refs.npas.value.trim(),
            cnpas = this.refs.cnpas.value.trim();


        if (npas === cnpas) {

            Accounts.changePassword(pas, npas, (err) => {
                if (err) {
                    this.setState({
                        title: 'Err',
                        msg: "Your passwords is different",
                        tooltip: true,
                    });
                }
                else {
                    this.refs.pas.value = '';
                    this.refs.npas.value = '';
                    this.refs.cnpas.value = '';
                    this.setState({
                        title: 'Success',
                        msg: "Successfully changed the password",
                        tooltip: true,
                    });
                }
            })

        } else {
            this.setState({
                title: 'Success',
                msg: "Successfully changed your password",
                tooltip: true,
            });
        }

    }

     ggg() {
        this.setState({
            tooltip: false,
        });
    }

    closed() {
        return (
            <div id="closedpasdiv" >
                {this.state.title}
                <Button onClick={this.ggg.bind(this)}>x</Button>
            </div>)
    };

    render() {


        if (this.props.isLoading) {
            return (
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <FormGroup>
                        <ControlLabel id="password">Present password</ControlLabel>
                        {' '}
                        <input className="form-control" ref="pas" type="password"
                               placeholder="Enter your current password "/>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>New password</ControlLabel>
                        {' '}
                        <input className="form-control" ref="npas" type="password"
                               placeholder="Enter your new password "/>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Confirm new password</ControlLabel>
                        {' '}
                        <input className="form-control" ref="cnpas" type="password"
                               placeholder="Confirm your password "/>
                    </FormGroup>
                    {  this.state.tooltip ? (
                        <Popover id="popover" placement="right" title={this.closed()}>
                            {this.state.msg }


                        </Popover>
                    ) : null }


                    <Button type="submit">
                        Submit changes
                    </Button>
                </form>
            )
        } else {
            return (<div> Loading ...</div>)
        }

    }
}

export default  createContainer(() => {
    let isLoading = Meteor.subscribe('user').ready();
    return {
        isLoading,
        user: Meteor.users.findOne() || {}
    }
}, Password);
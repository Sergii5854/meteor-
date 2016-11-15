import React, {Component, PropTypes} from "react";
import {FormGroup, ControlLabel, Button} from "react-bootstrap";
import {createContainer} from "meteor/react-meteor-data";


class Ava extends Component {
    constructor() {
        super();
        this.state = {
            imageBase64Url: '',
            isImageUrlNotReady: true
    }
}

    handleSubmit(e) {
        e.preventDefault();
        Meteor.call('user.saveAva', this.state.imageBase64Url);
        this.refs.ava.value = '';
    }

    handleImage(e) {
            e.preventDefault();

            let files = e.target.files;
            let fileReader = new FileReader();

            fileReader.onload = (e) => {
                this.setState({
                    imageBase64Url: e.target.result,
                    isImageUrlNotReady: false
                })
            };
            fileReader.readAsDataURL(files[0]);
        }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <FormGroup>
                    <ControlLabel id="ava">Avatar</ControlLabel>
                    {' '}

                    <input className="form-control"
                           ref="ava"
                           type="file"
                           accept="image/*"
                           onChange={this.handleImage.bind(this)}
                    />

                </FormGroup>

                <Button type="submit" disabled={this.state.isImageUrlNotReady} >
                    Upload avatar
                </Button>

            </form>
        )
    }
}

export default  createContainer(() => {
    return {}
}, Ava);
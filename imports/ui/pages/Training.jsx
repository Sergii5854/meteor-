import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import { Training} from '../../api/collections';
import {Modal, Button, FormGroup, ControlLabel} from "react-bootstrap";


class Trainings extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            translate: ""
        }
        this.handlerForm = this.handlerForm.bind(this);
        this.handlerInput= this.handlerInput.bind(this);
    }

    handlerInput(e) {
        e.preventDefault();

        let val = e.target.value;
        this.setState({
            translate: val
        });
        console.log(val);
    }

    handlerForm(e) {
        e.preventDefault();

        let ru = this.refs.ru.value;

        let word = {
            ru,
            _id: this.props.training[this.state.count]._id
        };

        Meteor.call('training.check', word, (err, res) => {
            if(err) {
                console.log("err not find word 111");
            }
            else if(res) {
                let count = this.state.count + 1;
                console.log(count);
                this.setState({
                    count,
                    translate: ""
                });
                console.log(111);
            }else {
                console.log("err not find word");
            }
        });

    }
    render() {
        let words = this.props.training,
            i = this.state.count;

        console.log(i);

        console.log(words);
        if (this.props.isLoading) {

            return (
                <div>
                    <div >
                        <h2>Training</h2>
                    </div>
                    <div>
                        <div id="engword">
                            <p>{words[i].eng}</p>

                        </div>

                        <div id="ruword">
                            <form onSubmit={this.handlerForm}>
                                <input onInput={this.handlerInput} value={this.state.translate} ref="ru" size={43} id="inputru"/>
                            </form>

                        </div>

                        <div id="btn">
                            <form onSubmit={this.handlerForm}>
                                <Button type="submit" bsStyle="primary">Next</Button>
                                {/*<Button  bsStyle="primary">Next</Button>*/}
                            </form>
                        </div>
                    </div>



                </div>
            )
        }
        else {
            return (<div>loading ...!!!!!</div>)
        }
    }
}

export default TrainingContainer = createContainer(() => {
    let sub = Meteor.subscribe("Training");
    return {
        isLoading: sub.ready(),
        training: Training.find({}, {limit:5}).fetch()
    }
}, Trainings);
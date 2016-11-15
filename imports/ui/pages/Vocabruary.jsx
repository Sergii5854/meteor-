import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import {Vocabruary} from '../../api/collections'


class Vocabruaries extends React.Component {
    render() {

        if (this.props.isLoading) {
            return (
                <div>
                    <div >
                        <h2>Vocabruary</h2>
                    </div>
                    {
                        this.props.vocabruary.map((el) => {
                            {/*console.log(el.eng);*/}
                            return (
                                <div  key={el._id}  >
                                   <p id="word">
                                       <input type="checkbox" />
                                       <span>{ el.eng } { el.translation} { el.ru}</span>
                                   </p>
                                </div>
                            )
                        })
                    }
                </div>
            )


        }
        else {
            return (<div>loading ...!!!!!</div>)
        }
    }
}

export default VocabruaryContainer = createContainer(() => {
    let sub = Meteor.subscribe("Vocabruary");
    return {
        // user: Meteor.users.findOne(),
        isLoading: sub.ready(),
        vocabruary: Vocabruary.find().fetch()
    }
}, Vocabruaries);
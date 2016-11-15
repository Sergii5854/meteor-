import React, {Component, PropTypes} from "react";
import {Tabs, Tab, Panel} from "react-bootstrap";
import {createContainer} from "meteor/react-meteor-data";
import Info from "./Account Seriings/Info";
import Password from "./Account Seriings/Password";
import Ava from "./Account Seriings/Ava";


class Settings extends React.Component {
    render() {
        return (
            <div>
                <Panel header="Account Settings" className="settings">
                    <Tabs defaultActiveKey={2} id="settings">

                        <Tab eventKey={1} title="Info">
                            <Info/>
                        </Tab>

                        <Tab eventKey={2} title="Password">
                           <Password/>
                        </Tab>

                        <Tab eventKey={3} title="Avatar">
                            <Ava/>
                        </Tab>

                    </Tabs>
                </Panel>
            </div>


                )
            }
         }

export default createContainer(() => {
    return {}
    }, Settings)


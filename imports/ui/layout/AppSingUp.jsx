import React from 'react';

class AppSingUp extends React.Component {
    render() {
        return (
            <div className="app-root">
                <div className="container">
                    <a href="/">Home</a>
                    <hr></hr>
                    {this.props.yieldTwo}
                </div>
            </div>
        );
    }
};

export default AppSingUp;
import React from 'react';

import App from '../imports/ui/layout/App';

import AppSingIn from '../imports/ui/layout/AppSingIn';
import SingIn from '../imports/identification/singin/SingIn';

import AppSingUp from '../imports/ui/layout/AppSingUp';
import SingUp from '../imports/identification/singup/SingUp';

import AppEngContainer from '../imports/ui/layout/AppEng';
import Eng from '../imports/ui/pages/Eng';
import Vocabruary from '../imports/ui/pages/Vocabruary';
import Training from '../imports/ui/pages/Training';
import AddWords from '../imports/ui/pages/AddWords';
import Settings from '../imports/ui/pages/Settings';

import {mount} from 'react-mounter';

// === Корень=== //
FlowRouter.route( '/', {
    name: 'home',
    action() {
        mount(App);
    }
});
// === SingIn=== //
FlowRouter.route( '/singin', {
    name: 'singin',
    action() {
        mount( AppSingIn, { yieldTwo: <SingIn /> } );
    }
});
// === SingUp === //
FlowRouter.route( '/singup', {
    name: 'singup',
    action() {
        mount( AppSingUp, { yieldTwo: <SingUp /> } );
    }
});

// === Eng === //
FlowRouter.route( '/eng', {
    name: 'eng',
    action() {
        mount( AppEngContainer );
    }
});
// === Vocabruary === //
FlowRouter.route( '/vocabruary', {
    name: 'vocabruary',
    action() {
        mount( AppEngContainer, { yieldTwo: <Vocabruary/> } );
    }
});
// === Training === //
FlowRouter.route( '/training', {
    name: 'training',
    action() {
        mount( AppEngContainer, { yieldTwo: <Training/> } );
    }
});

// === Add Words === //
FlowRouter.route( '/addwords', {
    name: 'addwords',
    action() {
        mount( AppEngContainer, { yieldTwo: <AddWords/> } );
    }
});

// === Account Settings === //
FlowRouter.route( '/settings', {
    name: 'settings',
    action() {
        mount( AppEngContainer, { yieldTwo: <Settings/> } );
    }
});


// === logout === //
FlowRouter.route('/logout', {
    name: "logout",
    action: (params, queryParams) => {
        Meteor.logout(() => {
                mount( AppSingUp, { yieldTwo: <SingUp /> } );
        })
    }
});

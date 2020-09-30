import React, { Component } from 'react';

import Auxillary from './Auxillary';
import Toolbar from './Toolbar';
import SideDrawer from './sideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Auxillary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            </Auxillary>
        )
    }
}

export default Layout;
import React from 'react';
import Backdrop from './Backdrop';
import Auxillary from './Auxillary';
import DrawerToggle from './DrawerToggle';

const Toolbar = ( props ) => {
    return (
        <Auxillary>
            <header className="Toolbar">
                <DrawerToggle clicked={props.drawerToggleClicked} />               
            </header>
        </Auxillary>
    );
};

export default Toolbar;
import React from 'react';
import Backdrop from './Backdrop';
import Auxillary from './Auxillary';

const SideDrawer = ( props ) => {

    return (    <Auxillary>  
                   <Backdrop show={props.open}
                   clicked={props.closed} 
                   backDropToggle={props.backDropToggle}
                   gralleryClick={props.gralleryClick}
                    />
                </Auxillary> 
    );
};

export default SideDrawer;
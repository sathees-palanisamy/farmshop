import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import './Shop.css';
import Detail from '../Detail/Detail';
import Embossed from './Embossed';
import Gift from './Gift';
import { withRouter } from 'react-router';

class Shop extends Component {

    constructor(props) {
        super(props);
        this.handleDetailClick = this.handleDetailClick.bind(this);
    }


    handleDetailClick = (imageLink, imageHeading, imagePrice) => {
        console.log('in handleDetailClick');
        this.props.updateData(imageLink, imageHeading, imagePrice)
    }

    render() {
        let renderDisplay;
        
        if ((this.props.renderUiShop === 'shop') || (this.props.renderUiShop === '')) {
           if (this.props.renderSubShop === '') {
           renderDisplay =  <Embossed />
            }
           if (this.props.renderSubShop === 'gift') {
                renderDisplay =  <Gift />
            }
        }

        
        if (this.props.renderUiShop === 'detail') {
            renderDisplay = <Detail />
        }

        if (this.props.renderUiPage === 'search') {
            renderDisplay = <Redirect to="/search" />
        }

        return (
            renderDisplay
         );
    }
}

const mapStateToProps = (state) => {
    return {
        renderUiPage: state.pageTag.uiPage,
        renderUiShop: state.pageTag.uiShop,
        renderSubShop: state.pageTag.subShop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateData: (imageLink, imageHeading, imagePrice) => dispatch(actions.updateData(imageLink, imageHeading, imagePrice)),
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shop));
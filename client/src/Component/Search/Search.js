import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import '../Shop/Shop.css';
import Detail from '../Detail/Detail';
import Shop from '../Shop/Shop';
import { withRouter } from 'react-router';


const Search = props => {


    const [categories, setcategories] = useState('');
    const [searchOrders, setFirstName] = useState([]);

    const handleDetailClick = (imageLink, imageHeading, imagePrice) => {
        console.log('in handleDetailClick');
        props.updateData(imageLink, imageHeading, imagePrice)
    }

    const  handleCategoryClick = (event) => {
        setcategories(event.target.value)
        if (event.target.value === 'Goddess') {
        props.switchToEmbossed();
        }
        if (event.target.value === 'Decorative Gift') {
            props.switchToGift();
        }
        if (event.target.value === 'Others') {
            props.switchToOthers();
        }
    }

    const priceFormating = (inputPrice) => {

        var x = inputPrice;
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers !== '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

        return res

    }

        let renderDisplay;

        let searchArray;

        if (props.rendersearchText.length > 0) {
            searchArray = props.rendersearchText.map((indiOrder, index) => (
                <div className="col span-1-of-4 GalleryBoxSize">
                <figure className="gallery-photo">
                    <img src={indiOrder.imageLink} alt="Fashion"   />
                </figure>
                <div className="btn-full">From ₹{priceFormating(indiOrder.imagePrice)}</div>
                <span className="prod-name">{indiOrder.imageHeading}</span>
                <div className="btnshop btn-ghost" onClick={(e) => handleDetailClick(indiOrder.imageLink,indiOrder.imageHeading,indiOrder.imagePrice)}>
                <span >More Details</span>
                </div>
            </div>
            ))
        }
        
        if ((props.renderUiShop === 'search') || (props.renderUiShop === '')) {
            renderDisplay =         <div class="content">
            <nav class="sidebar">
                <ul class="side-nav1">
                    <li class="side-nav1__item" onClick={props.switchToEmbossed}>
                        <a href="/shop" class="side-nav1__link">
                            <span className="side-nav1-font-size">Fruits</span>
                        </a>
                    </li>
                    <li class="side-nav1__item" onClick={props.switchToGift}>
                        <a href="/shop" class="side-nav1__link">
                            <span className="side-nav1-font-size">Vegetables</span>
                        </a>
                    </li>
                </ul>

                <div class="legal">
                    &copy; 2020 by Shri Rangaa gallery. All rights reserved.
            </div>
            </nav>

            <div className="CategoriesSelect"> 
            <h2>Categories</h2>
                    <select className="select-css" value={categories} onChange={handleCategoryClick}>
                        <option value="">Select</option>
                        <option value="Goddess">Goddess</option>
                        <option value="Decorative Gift">Decorative Gift</option>
                        <option value="Others">Others</option>
                    </select>
            </div>

            <main class="hotel-view">
                <div class="row gallery-showcase">
                 {searchArray}
               </div>
            </main>
            </div>

        }

        
        if (props.renderUiShop === 'detail') {
            renderDisplay = <Detail />;
            props.switchToShopFromSearch();
        }

        if (props.renderUiShop === 'shop') {
            renderDisplay = <Shop />
        }

        return (
            renderDisplay
         );
    }


const mapStateToProps = (state) => {
    return {
        renderUiPage: state.pageTag.uiPage,
        renderUiShop: state.pageTag.uiShop,
        renderSubShop: state.pageTag.subShop,
        rendersearchText: state.pageTag.searchText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateData: (imageLink, imageHeading, imagePrice) => dispatch(actions.updateData(imageLink, imageHeading, imagePrice)),
        switchToEmbossed: () => dispatch({ type: 'SWITCH_TO_EMBOSSED' }),
        switchToGift: () => dispatch({ type: 'SWITCH_TO_GIFT' }),
        switchToOthers: () => dispatch({ type: 'SWITCH_TO_OTHERS' }),
        switchToShopFromSearch: () => dispatch({ type: 'SWITCH_TO_SHOP_FROM_SEARCH' })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
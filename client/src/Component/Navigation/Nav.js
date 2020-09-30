import React, { useState } from 'react';
import Auxillary from './Auxillary';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import * as actions from '../store/actions';

const Nav = props => {

const [searchitem, setSearchitem] = useState('');

const searchChange = (event) => {
  setSearchitem(event.target.value);
}

const handleSearchClick = (event) => {

    let searchOrdersLocal = [];

    for(let i=0; i < props.products.length; i++) {
      if (props.products[i].imageHeading.toLowerCase().indexOf(searchitem) > -1) {  
          searchOrdersLocal.push(props.products[i])
      } 
     }


     for(let i=0; i < props.vegProducts.length; i++) {
      if (props.vegProducts[i].imageHeading.toLowerCase().indexOf(searchitem) > -1) {  
          searchOrdersLocal.push(props.vegProducts[i])
      } 
     }
    props.updateSearch(searchOrdersLocal)
 }

      let mobIcon;
      if (!props.iconClicked) {
        mobIcon = <img src="resources/favicons/hamburger.png" alt="hamburger logo" className="hamburger" onClick={props.drawerToggleClicked} />
      }  else {
        mobIcon =  <img src="resources/favicons/x.png" alt="hamburger logo" className="hamburger" onClick={props.drawerToggleClicked} />

      }

      return (
        <Auxillary>
          <div className="fixed-nav">
    
            <h1>Farm Shop</h1>
         
            <div className="Header-input">
            <input type="text" name="searchitem" id="searchitem" placeholder="Search"  onChange={searchChange} value={searchitem}  />
            <i className="ion-ios-search icon-small-black search-icon-position" onClick={handleSearchClick}></i>
            </div>
            {mobIcon}
                 <nav>
                  <ul className="main-nav">
                     <li>
                     <i className="ion-ios-home icon-small "></i>
                      <Link to="/">Home</Link>
                     </li>
                     <li>
                     <i className="ion-ios-photos icon-small "></i>
                      <Link to="/shop">Shop</Link>
                     </li>
                     <li>
                     <i className="ion-ios-car icon-small "></i>
                      <Link to="/shipping">Shipping</Link>
                     </li>
                     <li>
                     <i className="ion-ios-basket icon-small"></i>
                      <Link to="/basket">basket</Link>
                     </li>
                     <li>
                      <i className="ion-ios-call icon-small"></i>
                       <Link to="/contact">Contact</Link>
                     </li>
                  </ul>
           </nav>
      
           </div>
           </Auxillary>
      );
    }
  

  const mapStateToProps = (state) => {
    return {
        renderUiPage: state.pageTag.uiPage,
        products: state.dataExt,
        vegProducts: state.vegExt,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      updateSearch: (searchText) => dispatch(actions.updateSearch(searchText)),
    }
  }


  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
  
  
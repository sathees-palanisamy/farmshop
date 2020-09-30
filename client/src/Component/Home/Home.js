import React, { Component } from 'react';
import ImageRenderer from '../util/ImageRenderer';
import Footer from '../Footer/FooterPage';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.CSS';
import { withRouter } from 'react-router';


class Home extends Component {
  render() {
    let uiRender;

    if (this.props.renderUiPage === '') {
      uiRender = <div>

        <div className="row">
          <h2><b>Welcome to Farm Shop</b></h2>
        </div>
        <div className="row">


          <div className="col span-1-of-2 imagebackground">

            <img src="resources/Photos/Header/HomeBanner.jpg" alt="Home Image" className="app-screen1" />

          </div>

          <div className="col span-1-of-2 padding-card">
            <div className="hcard">
              <div className="hcard__side hcard__side--front">
                <br></br>
                <p class="long-copy">Farm Shop is a farm offering fresh home grown from the farm. we love to see them undercutting supermarket prices by avoiding middle men margins yet selling fresher, better food. </p>
                <br></br>
                <div class="long-copy">
                  <ul>
                    <li><b>Free Door to Door Delivery</b></li>
                    <li><b>10% Discount for regular customers </b></li>
                    <li><b>Farm Fresh Veggies and Fruits</b></li>
                    <li><b>Cashback for more than ₹ 1000 purchase</b></li>
                    <li><b>Hygienically Packed</b></li>
                    <li><b>Quick Delivery</b></li>
               
                  </ul>
                </div>

                <br></br>
                <br></br>
                <div className="btnpos">
                  <button href="/shop" className="btnhome" onClick={this.props.switchToShopPage} >Shop now!</button>
                </div>
              </div>
            </div>
          </div>

        </div>


        <br></br>

        <div className="row">
          <div class="story">
            <figure class="story__shape">
                            <img src="resources/Photos/contact.png" alt="Person on a tour" class="story__img"/>
                        </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">Quick Connect</h3>
              <span >
                <a href="https://wa.me/919003474248" className="whatsupplink">WhatsApp Chat</a>
              </span>
              <span >
                <i className="ion-md-call icon-small "></i>
                <span>&nbsp;&nbsp;+91 9003474248</span>
              </span>
              <span>
                <p>
                  <i className="ion-ios-mail icon-small "></i>
                  &nbsp;&nbsp;satheespalanisamy@gmail.com
            </p>
              </span>
            </div>
          </div>
        </div>
        <br></br>

        <div className="row">
          <div class="story">
          <figure class="story__shape">
                            <img src="resources/Photos/shipping.jpg" alt="Person on a tour" class="story__img"/>
                        </figure>
            <div class="story__text">
            <br></br>
           <br></br>
              <h3 class="heading-tertiary u-margin-bottom-small">Free Shipping</h3>
              <br></br>
              <span>
                <i className="ion-ios-car icon-small"></i>
                <span>&nbsp;&nbsp;Free Surface shipping All over Chennai & 24/7 Service</span>
              </span>
              <br></br>
              <br></br>
              
            </div>
          </div>
        </div>

        <br></br>

        <div className="row">
          <div class="story">
          <figure class="story__shape">
                            <img src="resources/Photos/bank.jpg" alt="Person on a tour" class="story__img"/>
                        </figure>
            <div class="story__text">
            <br></br>
           <br></br>
              <h3 class="heading-tertiary u-margin-bottom-small">Quick online Payment</h3>
              <br></br>
              <ul>
                                <li>Goodle Pay: 9003474248</li>
                                <li>Paytm      : 9003474248 </li>
                             
                            </ul>
              
            </div>
          </div>
        </div>


        <br></br>
        <br></br>
        <Footer />
      </div>

    }

    if (this.props.renderUiPage === 'shop') {
      uiRender = <Redirect to="/shop" />
    }

    if (this.props.renderUiPage === 'search') {
      uiRender = <Redirect to="/search" />
    }


    return (
      uiRender
    );
  }
}

const mapStateToProps = (state) => {
  return {
    renderUiPage: state.pageTag.uiPage,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchToShopPage: () => dispatch({ type: 'SWITCH_TO_SHOP' })
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

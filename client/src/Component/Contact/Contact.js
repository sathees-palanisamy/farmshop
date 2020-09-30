import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

class Contact extends Component {


    render() {

      let uiRender;
      if (this.props.renderUiPage !== 'search') {
          uiRender = <div className="section-form">
          <div className="row">
              <h2>We're happy to hear from you</h2>
          </div>
          <div className="row">
            <div className="col span-1-of-2 box">
                 <span className="contact-detail">
                      <p><b>Address:</b></p>
                      <p>No.183</p>
                      <p>Karandipalayam,Kattuvalasu</p>
                      <p>Erode District</p>
                      <p>TamilNadu, India - 638056</p>
                  </span>
            </div>
            <div className="col span-1-of-2">
            <span className="contact-detail">
            <a href="https://wa.me/919003474248" className="whatsupplink">WhatsApp Chat</a>
            </span>
            <span className="contact-detail">
            <i className="ion-md-call icon-small contact-detail2"></i>
                     <span>&nbsp;&nbsp;&nbsp;+91 9003474248</span>
            </span>
            <span className="contact-detail">
              <p>
            <i className="ion-ios-mail icon-small contact-detail2"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;satheespalanisamy@gmail.com
            </p>
            </span>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="section-steps">
             <div className="row">
                 <h2>Who are we</h2>
             </div>
          <div className="row">
 
             <div className="col span-2-of-5 steps-box">
 
                <img src="resources/Photos/Header/HomeBanner.jpg"  alt="" className="app-screen"/>
 
             </div>
 
             <div className="col span-3-of-5 steps-box">
                
                <div className="works-step clearfix">
                   <h3>Why:</h3>
                   <p>
                    Discover new products and shop for all your veggies and fruits needs from the comfort of your home. No more getting stuck in traffic jams, paying for parking, standing in long queues and carrying heavy bags – get everything you need, when you need, right at your doorstep.
                    </p>
                </div>
 
                <p>&nbsp;</p>
 
                <div className="works-step clearfix">
                   <h3>What:</h3>
                   <p>
                   Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality available at the lowest prices. Select a time slot for delivery and your order will be delivered right to your doorstep.
                   </p>
                </div>
 
                <p>&nbsp;</p>
 
                <div className="works-step clearfix">
                   <h3>Where:</h3>
                   <p>
                   We can deliver to all over Chennai.
                    </p>
                </div>
 
                <p>&nbsp;</p>
 
                <div className="works-step clearfix">
                   <h3>Privacy Policy :</h3>
                   <p>
                   We are making sure to follow the privacy policy and ensure to protect the customer data.
                   </p>
                </div>
       
             </div>
          </div>
         </div>
     
      </div>

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


  export default withRouter(connect(mapStateToProps)(Contact));
  
  
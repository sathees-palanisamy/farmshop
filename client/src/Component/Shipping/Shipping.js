import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

class Testimonals extends Component {
    render() {
        let uiRender;
        if (this.props.renderUiPage !== 'search') {
            uiRender = <div className="section-testimonials">
                <br></br>
                <div className="row" >
                    <h2>Track Shipping</h2>
                </div>
                <div className="row">

                    <div className="col span-1-of-3">
                        <label>Order ID</label>
                    </div>
                    <div className="col span-1-of-3">
                        <input type="text" name="orderId" id="orderId" placeholder="Order Id" required />
                    </div>

                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>Billing Email</label>
                    </div>
                    <div className="col span-1-of-3">
                        <input type="email" name="email" id="email" placeholder="Your email" required />
                    </div>
                </div>

                <br></br>

                <div className="btnpos">
                  <button href="/shop" className="btnhome">Track</button>
                </div>

         
                <br></br>
                <br></br>
                <div className="row" >
                    <h2>Shipping - Chennai only</h2>
                </div>
                <div className="row">
                    <div className="col span-1-of-2">
                        <div className="blockquote1">
                            <p><i><u>Shipping Time:</u></i></p>
                            <p>Within Adyar => 2 hours</p>
                            <p>Within Chennai => 4 hours</p>
                        </div>
                    </div>

                    <div className="col span-1-of-2">
                        <div className="blockquote1">
                            <p><i><u>Shipment Support:</u></i></p>We will provide you the contact details of delivery person and delivery note once shipment is made. Shipment is 100% Hygienically Packed, so you no need to worry about the product. Please contact us in case of any issues.
                   </div>
                    </div>

                    <div className="col span-1-of-2">
                        <div className="blockquote1">
                            <p><i><u>Delivery:</u></i></p>We will process and delivery in less time compared to other competitors. We will provide you delivery time once you are onboarded and we will make sure to deliver on time.
                   </div>
                    </div>
                </div>
                <br></br>
                <br></br>

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


export default withRouter(connect(mapStateToProps)(Testimonals));


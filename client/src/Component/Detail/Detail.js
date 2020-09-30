import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { withRouter } from 'react-router';
import { GlassMagnifier } from "react-image-magnifiers";
var currencyFormatter = require('currency-formatter');

class Detail extends Component {

   constructor(props) {
      super(props);
      this.state = { price: this.priceFormating(this.props.imagePrice), 
                     priceCat: 'J', 
                     frameSize: "1 kg", 
                     nonFormatPrice: this.props.imagePrice,
                     quantity: 1 };


      this.handleBackClick = this.handleBackClick.bind(this);
      this.handleBasketClick = this.handleBasketClick.bind(this);
      this.priceChange = this.priceChange.bind(this);
      this.quantityChange = this.quantityChange.bind(this);
   }

   handleBackClick = (event) => {
      console.log('handleBackClick');
      this.props.switchToShopPage();
   }

   handleBasketClick = (imageLink, imageHeading, imagePrice, frameSize,quantity) => {
      console.log('in handleBasketClick');
      console.log('frameSize', frameSize);
      let resStr = imageHeading.split("/");
      this.props.addBasket(imageLink, resStr[0], imagePrice, frameSize,quantity)
   }

   quantityChange(event) {
      this.setState({ quantity: event.target.value });
   }

   priceChange(event) {
      this.setState({ priceCat: event.target.value });
      let newPrice;
      let newFrameSize;

      let per100Gram = this.props.imagePrice/10;

      if (event.target.value === 'A') {
         newPrice = per100Gram
         newFrameSize = "100 gram"
      }
      if (event.target.value === 'B') {
         newPrice = per100Gram * 2;
         newFrameSize = "200 gram"
      }
      if (event.target.value === 'C') {
         newPrice = per100Gram * 3;
         newFrameSize = "300 gram"
      }
      if (event.target.value === 'D') {
         newPrice = per100Gram * 4;
         newFrameSize = "400 gram"
      }
      if (event.target.value === 'E') {
         newPrice = per100Gram * 5;
         newFrameSize = "500 gram"
      }
      if (event.target.value === 'F') {
         newPrice = per100Gram * 6;
         newFrameSize = "600 gram"
      }
      if (event.target.value === 'G') {
         newPrice = per100Gram * 7;
         newFrameSize = "700 gram"
      }
      if (event.target.value === 'H') {
         newPrice = per100Gram * 8;
         newFrameSize = "800 gram"
      }
      if (event.target.value === 'I') {
         newPrice = per100Gram * 9;
         newFrameSize = "900 gram"
      }
      if (event.target.value === 'J') {
         newPrice =  per100Gram * 10;
         newFrameSize = "1 kg"
      }
      if (event.target.value === 'K') {
         newPrice = this.props.imagePrice /4;
         newFrameSize = "1.5 kg"
      }
      if (event.target.value === 'L') {
         newPrice = this.props.imagePrice /4;
         newFrameSize = "2 kg"
      }
      if (event.target.value === 'M') {
         newPrice = this.props.imagePrice /4;
         newFrameSize = "2.5 kg"
      }
      if (event.target.value === 'N') {
         newPrice = this.props.imagePrice /4;
         newFrameSize = "3 kg"
      }
      if (event.target.value === 'O') {
         newPrice = this.props.imagePrice /4;
         newFrameSize = "3.5 kg"
      }
      if (event.target.value === 'P') {
         newPrice = this.props.imagePrice /4;
         newFrameSize = "4 kg"
      }
      this.setState({ frameSize: newFrameSize });
      this.setState({ price: this.priceFormating(newPrice) });
      this.setState({ nonFormatPrice: newPrice });
   }

   priceFormating = (inputPrice) => {
     
    return currencyFormatter.format(inputPrice, { code: 'INR' });

   }

   render() {
      return (
         <div >
            <div className="section-steps">
               <div className="row">
                  <h2>{this.props.imageHeading}</h2>
               </div>

               <div className="row">

                  <div className="col span-1-of-2 steps-box">
                     <GlassMagnifier
                        imageSrc={this.props.imageLink}
                        imageAlt="image"
                        magnifierSize="60%"
                        square
                     />

                  </div>
                  <div className="col span-1-of-2 steps-box">
                     <div className="price clearfix">
                        <h3>{this.state.price}</h3>
                     </div>

                     <div>
                        <div >
                           <span className="selectLabel">Quantity </span>
                           <select className="select-css" value={this.state.priceCat} onChange={this.priceChange}>
                              <option value="A">100 gram</option>
                              <option value="B">200 gram</option>
                              <option value="C">300 gram</option>
                              <option value="D">400 gram</option>
                              <option value="E">500 gram</option>
                              <option value="F">600 gram</option>
                              <option value="G">700 gram</option>
                              <option value="H">800 gram</option>
                              <option value="I">900 gram</option>
                              <option value="J">1 kg</option>
                              <option value="K">1.5 kg</option>
                              <option value="L">2 kg</option>
                              <option value="M">2.5 kg</option>
                              <option value="N">3 kg</option>
                              <option value="O">3.5 kg</option>
                              <option value="P">4 kg</option>
                           </select>
                        </div>
                        <br></br>
      
                     </div>
                     <p>&nbsp;</p>

                     <div className="works-step clearfix">
                        <h3>About:</h3>
                        <p>
                        Tiny and small sized, this variety is called Yelakki in Bangalore and Elaichi in Mumbai. Despite its small size, they are naturally flavoured, aromatic and sweeter compared to regular bananas. Yelakki bananas are around 3- 4 inches long and contain a thinner skin and better shelf life than Robusta bananas. 
                   </p>
                     </div>

                     <p>&nbsp;</p>

                     <div className="works-step clearfix">
                        <h3>Storage and Uses:</h3>
                        <p>
                        Store them in a cool, dry place away from direct sunlight. Fresh, raw yelakkis are green. They turn into golden yellow on ripening. Look for brown speckles and yellow skin to identify ripened ones. 
Slice them onto pancakes, blend into smoothies or add to fruit salads. Heat brings out the bananas' creamy sweetness. Try baking or sauteing them with butter and sugar for a delicious dessert. 
                  </p>
                     </div>

                     <p>&nbsp;</p>

                     <div className="works-step clearfix">
                        <h3>Benefits:</h3>
                        <p>
                        One banana supplies 30 percent of the daily vitamin B6 requirement and is rich in vitamin C and potassium. It reduces appetite and promotes weight loss, while also boosting the immune system and keeping the bones strong. It is very good for pregnant women and athletes.
                   </p>
                     </div>

                     <br></br>
                     <div className="detail-flex">

                        <div onClick={this.handleBackClick}>
                           <span className="btn btn1-color">Back To Shop</span>
                        </div>

                        <div onClick={(e) => this.handleBasketClick(this.props.imageLink, this.props.imageHeading, this.state.nonFormatPrice, this.state.frameSize,this.state.quantity)}>
                           <span className="btn btn2-color">Add To Basket</span>
                        </div>

                     </div>

                  </div>

               </div>

            </div>
         </div>
      );
   }
}


const mapStateToProps = (state) => {
   return {
      renderUiPage: state.pageTag.uiPage,
      imageLink: state.pageTag.imageLink,
      imageHeading: state.pageTag.imageHeading,
      imagePrice: state.pageTag.imagePrice
   }
}

const mapDispatchToProps = dispatch => {
   return {
      addBasket: (imageLink, imageHeading, imagePrice, frameSize, quantity) => dispatch(actions.addBasket(imageLink, imageHeading, imagePrice, frameSize,quantity)),
      switchToShopPage: () => dispatch({ type: 'SWITCH_TO_SHOP' })
   }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));

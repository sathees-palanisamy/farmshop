import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import './Shop.css';
import { withRouter } from 'react-router';

class Gift extends Component {

    constructor(props) {
        super(props);
        this.state = {categories: 'Decorative Gift',
        
        };
        this.handleDetailClick = this.handleDetailClick.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }


    handleDetailClick = (imageLink, imageHeading, imagePrice) => {
        console.log('in handleDetailClick');
        this.props.updateData(imageLink, imageHeading, imagePrice)
    }
    
    handleCategoryClick(event) {
        this.setState({ categories: event.target.value });
        if (event.target.value === 'Goddess') {
        this.props.switchToEmbossed();
        }
        if (event.target.value === 'Decorative Gift') {
            this.props.switchToGift();
        }
    }

    priceFormating = (inputPrice) => {

        var x = inputPrice;
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers !== '')
           lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  
        return res
  
     }  

    render() {
        let renderDisplay;
        
        renderDisplay =  <div class="container">
        <div class="content">
            <nav class="sidebar">
                <ul class="side-nav1">
                    <li class="side-nav1__item" onClick={this.props.switchToEmbossed}>
                        <a href="#" class="side-nav1__link">
                            <span className="side-nav1-font-size">Fruits</span>
                        </a>
                    </li>
                    <li class="side-nav1__item side-nav1__item--active" onClick={this.props.switchToGift}>
                        <a href="#" class="side-nav1__link">
                            <span className="side-nav1-font-size">Vegetables</span>
                        </a>
                    </li>
                </ul>

                <div class="legal">
                    &copy; 2020 by Farm Shop. All rights reserved.
            </div>
            </nav>

            <div className="CategoriesSelect"> 
            <h2>Categories</h2>
                    <select className="select-css" value={this.state.categories} onChange={this.handleCategoryClick}>
                        <option value="Goddess">Fruits</option>
                        <option value="Decorative Gift">Vegetables</option>
                    </select>
                </div>


            <main class="hotel-view">
                
            <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[0].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[0].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[0].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[0].imageLink,this.props.products[0].imageHeading,this.props.products[0].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[1].imageLink} alt="Fashion"/>
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[1].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[1].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[1].imageLink,this.props.products[1].imageHeading,this.props.products[1].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[2].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[2].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[2].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[2].imageLink,this.props.products[2].imageHeading,this.props.products[2].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[3].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[3].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[3].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[3].imageLink,this.props.products[3].imageHeading,this.props.products[3].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>
       
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[4].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[4].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[4].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[4].imageLink,this.props.products[4].imageHeading,this.props.products[4].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[5].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[5].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[5].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[5].imageLink,this.props.products[5].imageHeading,this.props.products[5].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[6].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[6].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[6].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[6].imageLink,this.props.products[6].imageHeading,this.props.products[6].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[7].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[7].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[7].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[7].imageLink,this.props.products[7].imageHeading,this.props.products[7].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>
       
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[8].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[8].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[8].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[8].imageLink,this.props.products[8].imageHeading,this.props.products[8].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[9].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[9].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[9].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[9].imageLink,this.props.products[9].imageHeading,this.props.products[9].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[10].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[10].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[10].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[10].imageLink,this.props.products[10].imageHeading,this.props.products[10].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[11].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[11].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[11].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[11].imageLink,this.props.products[11].imageHeading,this.props.products[11].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>
       
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[12].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[12].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[12].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[12].imageLink,this.props.products[12].imageHeading,this.props.products[12].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[13].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[13].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[13].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[13].imageLink,this.props.products[13].imageHeading,this.props.products[13].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[14].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[14].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[14].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[14].imageLink,this.props.products[14].imageHeading,this.props.products[14].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[15].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[15].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[15].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[15].imageLink,this.props.products[15].imageHeading,this.props.products[15].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>
       
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[16].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[16].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[16].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[16].imageLink,this.props.products[16].imageHeading,this.props.products[16].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[17].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[17].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[17].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[17].imageLink,this.props.products[17].imageHeading,this.props.products[17].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[18].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[18].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[18].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[18].imageLink,this.props.products[18].imageHeading,this.props.products[18].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[19].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[19].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[19].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[19].imageLink,this.props.products[19].imageHeading,this.props.products[19].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>
       
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[20].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[20].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[20].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[20].imageLink,this.props.products[20].imageHeading,this.props.products[20].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[21].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[21].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[21].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[21].imageLink,this.props.products[21].imageHeading,this.props.products[21].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[22].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[22].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[22].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[22].imageLink,this.props.products[22].imageHeading,this.props.products[22].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[23].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[23].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[23].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[23].imageLink,this.props.products[23].imageHeading,this.props.products[23].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>
       
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[24].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[24].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[24].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[24].imageLink,this.props.products[24].imageHeading,this.props.products[24].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[25].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[25].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[25].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[25].imageLink,this.props.products[25].imageHeading,this.props.products[25].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[26].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[26].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[26].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[26].imageLink,this.props.products[26].imageHeading,this.props.products[26].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[27].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[27].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[27].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[27].imageLink,this.props.products[27].imageHeading,this.props.products[27].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>
       
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[28].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[28].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[28].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[28].imageLink,this.props.products[28].imageHeading,this.props.products[28].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[29].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[29].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[29].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[29].imageLink,this.props.products[29].imageHeading,this.props.products[29].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[30].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[30].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[30].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[30].imageLink,this.props.products[30].imageHeading,this.props.products[30].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[31].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[31].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[31].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[31].imageLink,this.props.products[31].imageHeading,this.props.products[31].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>

                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[32].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[32].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[32].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[32].imageLink,this.props.products[32].imageHeading,this.props.products[32].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[33].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[33].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[33].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[33].imageLink,this.props.products[33].imageHeading,this.props.products[33].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[34].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[34].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[34].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[34].imageLink,this.props.products[34].imageHeading,this.props.products[34].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[35].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[35].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[35].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[35].imageLink,this.props.products[35].imageHeading,this.props.products[35].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>

                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[36].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[36].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[36].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[36].imageLink,this.props.products[36].imageHeading,this.props.products[36].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[37].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[37].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[37].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[37].imageLink,this.props.products[37].imageHeading,this.props.products[37].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[38].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[38].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[38].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[38].imageLink,this.props.products[38].imageHeading,this.props.products[38].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[39].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[39].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[39].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[39].imageLink,this.props.products[39].imageHeading,this.props.products[39].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>
    
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[40].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[40].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[40].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[40].imageLink,this.props.products[40].imageHeading,this.props.products[40].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[41].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[41].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[41].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[41].imageLink,this.props.products[41].imageHeading,this.props.products[41].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[42].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[42].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[42].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[42].imageLink,this.props.products[42].imageHeading,this.props.products[42].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[43].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[43].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[43].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[43].imageLink,this.props.products[43].imageHeading,this.props.products[43].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>

                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[44].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[44].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[44].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[44].imageLink,this.props.products[44].imageHeading,this.props.products[44].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[45].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[45].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[45].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[45].imageLink,this.props.products[45].imageHeading,this.props.products[45].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[46].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[46].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[46].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[46].imageLink,this.props.products[46].imageHeading,this.props.products[46].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[47].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[47].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[47].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[47].imageLink,this.props.products[47].imageHeading,this.props.products[47].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>

                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[48].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">1 Kg ₹{this.priceFormating(this.props.products[48].imagePrice)}</div>
                        <span className="prod-name">{this.props.products[48].imageHeading}</span>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[48].imageLink,this.props.products[48].imageHeading,this.props.products[48].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>
       
            </main>
        

     </div>
    </div>

        return (
            renderDisplay
         );
    }
}

const mapStateToProps = (state) => {
    return {
        renderUiPage: state.pageTag.uiPage,
        renderUiShop: state.pageTag.uiShop,
        products: state.vegExt,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateData: (imageLink, imageHeading, imagePrice) => dispatch(actions.updateData(imageLink, imageHeading, imagePrice)),
        switchToEmbossed: () => dispatch({ type: 'SWITCH_TO_EMBOSSED' }),
        switchToGift: () => dispatch({ type: 'SWITCH_TO_GIFT' }),
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Gift));
import React, { Component } from 'react';

class FooterPage extends Component {
    render() {
      return (
    <div className="footer-page">
            <div className="row">
                <p>
                    Copyright &copy; 2020 by Farm Shop. All rights reserved.
                </p>
            </div>
            <div className="row">
                <ul className="social-links">
                        <li><a href="https://"><i className="icon ion-logo-facebook"></i></a></li>
                        <li><a href="https://"><i className="icon ion-logo-instagram"></i></a></li>
                    </ul>
            </div>
    </div>
      );
    }
  }
  
  export default FooterPage;
  
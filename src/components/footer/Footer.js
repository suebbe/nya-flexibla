import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    <div className="footer-content-wrapper">
      <div className="row">
        <div className="col">
          <h5>Kontakt</h5>
          <p>
            <i className="fas fa-phone"></i>&emsp;  0771-7350 300 <br/>
            <i className="fas fa-envelope"></i>&emsp;  info@flexiblakontoret.nu</p>
        </div>
        <div className="col">
          <h5>Öppettider</h5>
          <p> Mån - Fre: &emsp; 08:00 - 16:00 </p>
        </div>
        <div className="col">
          <h5>Sociala Medier</h5>
          <p><a href="#"><i className="fab fa-facebook"></i> </a> &emsp; <a href="#"><i className="fab fa-instagram"></i></a>  </p>
        </div>
        <p>
          <i className="fas fa-home"></i> &emsp; Karlsbodavägen 2,168 67 Bromma
        </p>
      </div>
    </div>

    );
  }
}

export default Footer;

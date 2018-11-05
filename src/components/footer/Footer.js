import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    <div className="footer-content-wrapper">
      <div className="row footer-row">
        <div className="col">
          <h5>Kontakt</h5>
          <p>
            <i className="fas fa-phone"></i>&emsp;  020-22 11 55 <br/>
            <i className="fas fa-envelope"></i>&emsp;  info@flexiblakontoret.nu</p>
        </div>
        <div className="col">
          <h5>Öppettider</h5>
          <p> Mån - Fre: &emsp; 08:00 - 16:00 </p>
        </div>
        <div className="col">
          <h5>Sociala Medier</h5>
          <p><a href="#"><i className="fab fa-facebook"></i> </a> &emsp; <a href="#"><i className="fab fa-instagram"></i></a>  </p>
          <p><i>Kommer inom kort! </i></p>
        </div>
        <div className="col">
          <h5>Kundsupport</h5>
          <p>
            <i className="fas fa-phone"></i>&emsp;  020-44 80 00 <br/>
            <i className="fas fa-envelope"></i>&emsp;  support@flexiblakontoret.nu<br/>
            <i className="fas fa-home"></i> &emsp; Box 20073, 161 02 Bromma
          </p>
        </div>
      </div>
    </div>

    );
  }
}

export default Footer;

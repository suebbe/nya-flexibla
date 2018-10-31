import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="head">
        <div className="logo">
        </div>
        <div className="top-content">
          <h1>FLEXIBLA KONTORET</h1>
          <p>GÖR DET LITE ENKLARE</p>
          <a href="http://app.flexiblakontoret.nu" target="blank" className="show-all-button">LOGGA IN</a>
        </div>
      </div>
    );
  }
}

export default Nav;

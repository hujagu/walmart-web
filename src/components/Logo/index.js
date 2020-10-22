import React from 'react';
import logo from './lider-logo.svg';

class Logo extends React.Component {
  render() {
    return <div className="logo">
      <img
        src={logo}
        style={{
          width: "152px",
          height: "50px",
          marginTop: "8px",
          marginLeft: "10px",
          paddingTop: "6px",
          marginBottom: "6px",
        }}
      />
    </div>
  }
}

export default Logo;

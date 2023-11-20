import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="navbar-logo">
        <Link to=""><img src={require(`./images/seo-logo.png`)} className="seo-logo"/></Link>
      </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      </div>
</nav>
  );
}

export default Navbar;

import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const Header = ({authenticated, signOut}) => {
  return (
    <header className="header">
      <div className="g-row">
        <div className="g-col">
          <Link className="header__title" to={{pathname: '/open'}}>Open</Link>
          <Link className="header__route" to={{pathname: '/shift'}}>Shift</Link>
          <Link className="header__route" to={{pathname: '/shift #2'}}>Shift #2</Link>
          <Link className="header__route" to={{pathname: '/shift #3'}}>Shift #3</Link>
          <Link className="header__route" to={{pathname: '/pepsi fountain'}}>Pepsi</Link>
          <Link className="header__route" to={{pathname: '/display cooler'}}>Disp Cooler</Link>
          <Link className="header__route" to={{pathname: '/refrigerator'}}>Fridge</Link>
          <Link className="header__route" to={{pathname: '/back cooler'}}>Back Cooler</Link>
          <Link className="header__route" to={{pathname: '/espresso machine'}}>Espresso</Link>
          <Link className="header__route" to={{pathname: '/management'}}>Management</Link>
          <Link className="header__route" to={{pathname: '/close'}}>Close</Link>
          <ul className="header__actions">
            {authenticated ? <li><button className="btn" onClick={signOut}>Sign out</button></li> : null}
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Header;

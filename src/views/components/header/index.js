import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const Header = ({authenticated, signOut}) => {
  return (
    <header className="header">
      <div className="g-row">
        <div className="g-col">
          <h1 className="header__title">Cafe Tasks</h1>
          <Link className="header__route" to={{pathname: '/open'}}>Open</Link>
          <Link className="header__route" to={{pathname: '/shift'}}>Shift</Link>
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

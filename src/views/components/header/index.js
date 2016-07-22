import React, { PropTypes } from 'react';


const Header = ({authenticated, signOut}) => {
  return (
    <header className="header">
      <div className="g-row">
        <div className="g-col">
          <h1 className="header__title">Cafe Tasks</h1>
          {/*<ul className="task-filters">*/}
            {/*<li><Link activeClassName="active" to="/">Open</Link></li>*/}
            {/*<li><Link activeClassName="active" to={{pathname: '/'}}>First Shift</Link></li>*/}
            {/*<li><Link activeClassName="active" to={{pathname: '/'}}>Second Shift</Link></li>*/}
            {/*<li><Link activeClassName="active" to={{pathname: '/'}}>Close</Link></li>*/}
          {/*</ul>*/}
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

import React from "react";
import {Link} from 'react-router';

function Header() {
  return (
    <header className="header">
      <h2>Expense Tracker</h2>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/expenses'>Expense</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/report'>Report</Link>
        <Link to='/login'>Login</Link>
      </nav>
    </header>
  );
}

export default Header;
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Header.css';
export default class Header extends Component {
  render() {
    return (
      <nav className="Header">
        <h1> {this.props.name}</h1>
        <div className="nav-list">
          <div className="nav-item">
            <Link to="/">Kids</Link>
          </div>
          <div className="nav-item">
            <Link to="/men">Mens</Link>
          </div>
          <div className="nav-item">
            <Link to="/women">Womens</Link>
          </div>
          <div className="nav-item">
            <Link to="/plussize">Plus Size</Link>
          </div>
        </div>
      </nav>
    );
  }
}


import React from 'react';
import {NavLink} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styles from './PageNav.module.scss';

const PageNav = () => (
  <nav>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>  
    <NavLink exact to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink exact to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
    <NavLink exact to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>tables</NavLink>
    <NavLink exact to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</NavLink>
  </nav>
);

export default PageNav;
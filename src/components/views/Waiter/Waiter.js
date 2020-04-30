import React from 'react';
import styles from '../Waiter/Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <div>
      <Link exact to = {`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>New Order</Link>
    </div>
    <div>
      <Link to = {`${process.env.PUBLIC_URL}/waiter/order/123`} activeClassName='active'>Order id</Link>
    </div>
  </div>
);

export default Waiter;
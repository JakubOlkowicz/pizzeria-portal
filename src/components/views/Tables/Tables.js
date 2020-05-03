import React from 'react';
import styles from '../Tables/Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <ul>
      <li>
        <Link exact to = {`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>Booking New</Link>
      </li>
      <li>
        <Link to = {`${process.env.PUBLIC_URL}/tables/booking/123`} activeClassName='active'>Booking Id</Link>
      </li>
      <li>
        <Link to = {`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>Events New</Link>
      </li>
      <li>
        <Link to = {`${process.env.PUBLIC_URL}/tables/events/123`} activeClassName='active'>Events Id</Link>
      </li>
    </ul>
  </div>
);

export default Tables;
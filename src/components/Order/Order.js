import React from 'react';

import classes from './Order.module.css';

const Order = (props) => (
  <div className={classes.Order}>
    <p>Ingredients: </p>
    <p>
      Price: <strong>USD: 4.5</strong>
    </p>
  </div>
);

export default Order;

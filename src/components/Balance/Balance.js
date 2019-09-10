import React from 'react';
import PropTypes from 'prop-types';
import s from './Balance.module.css';

const Balance = ({ balance, allDepositNumber, allWithdrawNumber }) => {
  return (
    <section className={s.balance}>
      <span>
        <span className={s.arrowUp}>&uarr;</span> {allDepositNumber} $
      </span>
      <span>
        <span className={s.arrowDown}>&darr;</span> {allWithdrawNumber} $
      </span>
      <span> Balance: {balance} $ </span>
    </section>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  allDepositNumber: PropTypes.number.isRequired,
  allWithdrawNumber: PropTypes.number.isRequired,
};

export default Balance;

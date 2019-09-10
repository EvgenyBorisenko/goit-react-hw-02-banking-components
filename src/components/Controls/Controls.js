import React from 'react';
import PropTypes from 'prop-types';
import s from './Controls.module.css';

const Controls = ({ inputValue, onChangeInput, onClickButton }) => {
  return (
    <section className={s.controls}>
      <input
        value={inputValue}
        onChange={onChangeInput}
        className={s.controls_input}
        type="number"
      />
      <button
        data-id="Deposit"
        className={s.controls_buttonDeposit}
        type="button"
        onClick={onClickButton}
      >
        Deposit
      </button>
      <button
        data-id="Withdraw"
        className={s.controls_buttonWithdraw}
        type="button"
        onClick={onClickButton}
      >
        Withdraw
      </button>
    </section>
  );
};

Controls.propTypes = {
  inputValue: PropTypes.number.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default Controls;

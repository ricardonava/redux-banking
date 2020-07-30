import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Banking() {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch({ type: 'DEPOSIT', amount: parseInt(amount, 10) });
  };
  const handleWithdraw = () => {
    dispatch({ type: 'WITHDRAW', amount: parseInt(amount, 10) });
  };

  const handleCollectInterest = () => {
    dispatch({ type: 'COLLECT_INTEREST' });
  };

  const handledDelete = () => {
    dispatch({ type: 'DELETE_ACCOUNT' });
  };

  const handleChangeAccount = () => {};

  return (
    <div className="form-group">
      <input
        onChange={(e) => setAmount(e.target.value)}
        type="text"
        className="form-control"
      />
      <button onClick={handleDeposit} type="button" className="btn btn-success">
        Deposit
      </button>
      <button
        onClick={handleWithdraw}
        type="button"
        className="btn btn-primary"
      >
        Withdraw
      </button>
      <button
        onClick={handleCollectInterest}
        type="button"
        className="btn btn-warning"
      >
        Collect Interest
      </button>
      <button onClick={handledDelete} type="button" className="btn btn-danger">
        Delete Account
      </button>
      <button
        onClick={handleChangeAccount}
        type="button"
        className="btn btn-secondary"
      >
        Change Account Type
      </button>
    </div>
  );
}

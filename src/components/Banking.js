import React from 'react';

export default function Banking() {
  return (
    <div className="form-group">
      <input type="text" className="form-control" />
      <button type="button" className="btn btn-success">
        Deposit
      </button>
      <button type="button" className="btn btn-primary">
        Withdraw
      </button>
      <button type="button" className="btn btn-warning">
        Collect Interest
      </button>
      <button type="button" className="btn btn-danger">
        Delete Account
      </button>
      <button type="button" className="btn btn-secondary">
        Change Account Type
      </button>
    </div>
  );
}

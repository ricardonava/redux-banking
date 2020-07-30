import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuth } from '../actions/bankingActions';

const Auth = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleAuth = () => {
    dispatch(toggleAuth());
  };
  return (
    <div>
      <button onClick={handleAuth} type="button" className="btn btn-info">
        {auth.isLoggedIn ? 'logout' : 'login'}
      </button>
    </div>
  );
};

export default Auth;

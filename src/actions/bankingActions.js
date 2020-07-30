/* eslint-disable import/prefer-default-export */
export const deposit = (amount) => {
  return { type: 'DEPOSIT', amount: parseInt(amount, 10) };
};

export const withdraw = (amount) => {
  return { type: 'WITHDRAW', amount: parseInt(amount, 10) };
};

export const collectInterest = () => {
  return { type: 'COLLECT_INTEREST' };
};

export const deleteAccount = () => {
  return { type: 'DELETE_ACCOUNT' };
};

export const toggleAccount = () => {
  return {
    type: 'TOGGLE_ACCOUNT'
  };
};

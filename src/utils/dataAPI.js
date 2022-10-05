import * as data from "../data.json";

export const getDataById = (id) => {
  return data.transactions.find(
    (transaction) => Number(transaction.account) === Number(id)
  );
};

export const getDataAll = () => {
  return data.transactions;
};

export const getData = (accountNames = [], transactionTypes = []) => {
  return data.transactions.filter(
    (a) =>
      accountNames.find((f) => f === a.accountName) &&
      transactionTypes.find((f) => f === a.transactionType)
  );
};

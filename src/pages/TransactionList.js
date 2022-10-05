import { useEffect, useState } from "react";

import TransactionTable from "../components/TransactionTable";
import Filter from "../components/Filter";
import Layout from "../layout/Layout";
import { getDataAll, getData } from "../utils/dataAPI";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [accountName, setAccountName] = useState({});
  const [transactionType, setTransactionType] = useState({});

  useEffect(() => {
    const data = getDataAll();
    if (data && data.length > 0) {
      setTransactions([...data]);
      const a = {};
      const b = {};
      data.forEach((transaction) => {
        if (!a[transaction.accountName])
          a[transaction.accountName] = {
            label: transaction.accountName,
            value: transaction.accountName,
            checked: true
          };
        if (!b[transaction.transactionType])
          b[transaction.transactionType] = {
            label: transaction.transactionType,
            value: transaction.transactionType,
            checked: true
          };
      });
      setAccountName({ ...a });
      setTransactionType({ ...b });
    }
  }, []);

  useEffect(() => {
    const selectedAccountName = Object.keys(accountName)
      .filter((a) => accountName[a].checked)
      .map((a) => accountName[a].value);
    const selectedTransactionType = Object.keys(transactionType)
      .filter((a) => transactionType[a].checked)
      .map((a) => transactionType[a].value);

    const data = getData(selectedAccountName, selectedTransactionType);

    setTransactions([...data]);
  }, [transactionType, accountName]);

  const onAccountNameChange = (checked, key) =>
    setAccountName({
      ...accountName,
      [key]: {
        label: key,
        value: key,
        checked
      }
    });

  const onTransactionTypeChange = (checked, key) =>
    setTransactionType({
      ...transactionType,
      [key]: {
        label: key,
        value: key,
        checked
      }
    });

  return (
    <Layout title="Transactions">
      <div className="transactions-container">
        <Filter
          accountName={accountName}
          transactionType={transactionType}
          onAccountNameChange={onAccountNameChange}
          onTransactionTypeChange={onTransactionTypeChange}
        />
        <TransactionTable transactions={transactions} />
      </div>
    </Layout>
  );
};

export default TransactionList;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDataById } from "../utils/dataAPI";
import Layout from "../layout/Layout";

const TransactionDetail = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const data = getDataById(id);
    setTransaction(data);
  }, [id]);

  return (
    <Layout title={`Transaction ${id}`}>
      {transaction ? (
        <div className="transaction-detail">
          <label className="detail-label">
            Account No:
            <span className="detail-span">{transaction.account}</span>
          </label>
          <label className="detail-label">
            Account Name:
            <span className="detail-span">{transaction.accountName}</span>
          </label>
          <label className="detail-label">
            Currency Code:
            <span>{transaction.currencyCode}</span>
          </label>
          <label className="detail-label">
            Amount:
            <span className="detail-span">{transaction.amount}</span>
          </label>
          <label className="detail-label">
            Transaction Type:
            <span className="detail-span">{transaction.transactionType}</span>
          </label>
        </div>
      ) : (
        "Can not find transaction"
      )}
    </Layout>
  );
};

export default TransactionDetail;

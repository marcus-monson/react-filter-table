import { Link } from "react-router-dom";
import { Column, Table, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css";

const TransactionTable = ({ transactions }) => {
  return (
    <div style={{ height: "100vh", width: "80%" }}>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            width={width}
            height={height}
            headerHeight={20}
            rowHeight={30}
            rowCount={transactions.length}
            rowGetter={({ index }) => transactions[index]}
          >
            <Column
              label="Account No."
              dataKey="account"
              width={200}
              cellRenderer={(e) => (
                <Link className="link" to={`/transaction/${e.cellData}`}>
                  {e.cellData}
                </Link>
              )}
            />
            <Column label="Account Name" dataKey="accountName" width={200} />
            <Column label="Currency" dataKey="currencyCode" width={200} />
            <Column label="Amount" dataKey="amount" width={200} />
            <Column
              label="Transaction Type"
              dataKey="transactionType"
              width={200}
              style={{ textTransform: "capitalize" }}
            />
          </Table>
        )}
      </AutoSizer>
    </div>
  );
};

export default TransactionTable;

const CheckBox = ({ label, onChange, checked }) => {
  return (
    <label style={{ margin: "3px 0", textTransform: "capitalize" }}>
      <input type="checkbox" onChange={onChange} checked={checked} />
      {label}
    </label>
  );
};

const Filter = ({
  accountName,
  transactionType,
  onAccountNameChange,
  onTransactionTypeChange
}) => {
  return (
    <div className="filter-container">
      <div className="filter">
        {Object.keys(accountName).map((key) => (
          <CheckBox
            key={key}
            label={accountName[key].label}
            checked={accountName[key].checked}
            onChange={(e) => {
              onAccountNameChange(e.target.checked, key);
            }}
          />
        ))}
      </div>
      <div className="filter">
        {Object.keys(transactionType).map((key) => (
          <CheckBox
            key={key}
            label={transactionType[key].label}
            checked={transactionType[key].checked}
            onChange={(e) => {
              onTransactionTypeChange(e.target.checked, key);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;

import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #444;
  background-color: #333;
  border-radius: 8px;
  padding: 15px 20px;
  border-right: 5px solid ${(props) => (props.isExpense ? "#FF6347" : "#3CB371")};
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    background-color: #2c2c2c;
  }
`;

const Details = styled.span`
  flex: 1;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
`;

const Amount = styled.span`
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
`;

const RemoveButton = styled.button`
  background-color: #FF6347;
  color: white;
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E53935;
  }
`;

const TransactionItem = ({ transaction, removeTransaction }) => {
  return (
    <Item isExpense={transaction?.transType === "expense"}>
      <Details>{transaction.details}</Details>
      <Amount>₹{transaction.amount}</Amount>
      <RemoveButton onClick={() => removeTransaction(transaction.id)}>
        Remove
      </RemoveButton>
    </Item>
  );
};

export default TransactionItem;
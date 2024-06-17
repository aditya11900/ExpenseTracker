import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div`
  background-color: #2c2c2c;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0 25px;
  border: 1px solid #444;
  background-color: #444;
  color: #fff;
  font-size: 16px;
`;

const TransactionItems = styled.div`
  & > p {
    color: #fff;
    text-align: center;
  }
`;

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const filteredData = (searchInput) => {
    if (!searchInput || !searchInput.trim().length) {
      setFilteredTransactions(transactions);
      return;
    }

    let filtered = transactions.filter((item) =>
      item.details.toLowerCase().includes(searchInput.toLowerCase().trim())
    );
    setFilteredTransactions(filtered);
  };

  useEffect(() => {
    filteredData(searchInput);
  }, [transactions, searchInput]);

  return (
    <Container>
      <Heading>Transactions</Heading>

      <SearchInput
        type="text"
        placeholder="Search here"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <TransactionItems>
        {filteredTransactions?.length ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              transaction={transaction}
              key={transaction.id}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <p>No Transactions</p>
        )}
      </TransactionItems>
    </Container>
  );
};

export default TransactionsContainer;

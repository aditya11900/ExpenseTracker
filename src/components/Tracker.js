import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";
import OverviewComponent from "./OverviewComponent";
import TransactionsContainer from "./TransactionsContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  background-color:#f2f2;
  padding: 30px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 10px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const TransactionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
`;

const THeading = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #44e610;
`;

const ExpenseBox = styled.div`
  flex: 1;
  border: 1px solid #e57373;
  border-radius: 10px;
  padding: 20px;
  background-color: #ffebee;
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    font-weight: bold;
    font-size: 28px;
    display: block;
    margin-top: 10px;
    color: red;
  }
`;

const IncomeBox = styled(ExpenseBox)`
  border: 1px solid #81c784;
  background-color: #e8f5e9;
  & span {
    color: green;
  }
`;

const Tracker = () => {
  const [toggle, setToggle] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    setTransactions(transactionArray);
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const calculateTransactions = () => {
    let exp = 0;
    let inc = 0;

    transactions.forEach((item) => {
      item.transType === "expense" ? (exp += item.amount) : (inc += item.amount);
    });

    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateTransactions();
  }, [transactions]);

  return (
    <Container>
      <Heading>Expense Tracker</Heading>
      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
        expense={expense}
        income={income}
      />

      {toggle && (
        <AddTransaction
          setToggle={setToggle}
          addTransaction={addTransaction}
        />
      )}

      <TransactionDetails>
        <ExpenseBox>
          Expense <span>₹{expense}</span>
        </ExpenseBox>

        <IncomeBox>
          Budget <span>₹{income}</span>
        </IncomeBox>
      </TransactionDetails>

      <TransactionsContainer
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
    </Container>
  );
};

export default Tracker;

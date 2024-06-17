import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  border: 1px solid #333;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 25px;
  background-color: #2c2c2c;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px solid #444;
  background-color: #444;
  color: #fff;
  font-size: 16px;

  &::placeholder {
    color: #ccc;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const Label = styled.label`
  margin-left: 10px;
  cursor: pointer;
  color: #fff;
`;

const RadioBtn = styled.div`
  margin: 0 15px;
`;

const SubmitBtn = styled.button`
  background-color: #44e610;
  color: #fff;
  border-radius: 5px;
  padding: 12px 24px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #3ca50c;
  }
`;

const AddTransaction = ({ setToggle, addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transType, setTransType] = useState("expense");

  const addTransactionData = () => {
    addTransaction({
      amount: Number(amount),
      details,
      transType,
      id: Date.now(),
    });
    setAmount("");
    setDetails("");
    setTransType("expense");
    setToggle(false);
  };

  return (
    <Container>
      <Input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Enter Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <RadioContainer>
        <RadioBtn>
          <input
            type="radio"
            id="expense"
            name="type"
            value="expense"
            checked={transType === "expense"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <Label htmlFor="expense">Expense</Label>
        </RadioBtn>

        <RadioBtn>
          <input
            type="radio"
            id="income"
            name="type"
            value="income"
            checked={transType === "income"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <Label htmlFor="income">Income</Label>
        </RadioBtn>
      </RadioContainer>

      <SubmitBtn onClick={addTransactionData}>Add Transaction</SubmitBtn>
    </Container>
  );
};

export default AddTransaction;

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  background-color: #333;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Balance = styled.h2`
  font-weight: 500;
  color: #fff;
  & span {
    font-weight: bold;
    color: #fff;
  }
`;

const AddBtn = styled.button`
  cursor: pointer;
  background-color: #44e610;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  text-transform: uppercase;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3bb30c;
  }
`;

const OverviewComponent = ({ toggle, setToggle, income, expense }) => {
  const bal = income - expense;

  return (
    <Container>
      <Balance>
        Balance <span>₹{bal}</span>
      </Balance>
      <AddBtn onClick={() => setToggle(!toggle)}>
        {toggle ? "Cancel" : "Add"}
      </AddBtn>
    </Container>
  );
};

export default OverviewComponent;
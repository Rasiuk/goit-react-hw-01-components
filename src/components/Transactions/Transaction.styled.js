import styled from 'styled-components';
export const TransactionHistory = styled.table`
  width: 700px;
  border-collapse: collapse;
  text-align: center;
  border-radius: 4px;
  thead {
    background-color: #4ea5e3;
    color: #ffffff;
  }
  tbody {
    color: grey;
  }
  th,
  td {
    padding: 10px;
    border: 1px solid #2a2a2a;
  }
  tr: nth-child(2n) {
    background-color: #f3f4f5;
  }
`;

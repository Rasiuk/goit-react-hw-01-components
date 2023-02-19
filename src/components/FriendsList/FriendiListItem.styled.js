import styled from 'styled-components';
export const FriendsList = styled.ul`
  list-style: none;
  li {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;
export const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
export const Item = styled.li`
  border: 4px solid #f2f3f5;
  width: 300px;
  height: 60px;
  border-radius: 4px;
  box-shadow: inset;
`;

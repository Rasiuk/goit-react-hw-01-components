import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 370px;
  border-radius: 4px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  margin-top: 20px;
  margin-bottom: 2px;
  img {
    width: 200px;
    border-radius: 100px;
    box-shadow: 0 0 0 3px white, 0 0 13px #333;
  }
`;
export const Name = styled.p`
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-weight: 700;
  margin: 0;
  padding: 10px 0;
`;
export const Tag = styled.p`
margin: 0
padding: 10px;
color: #808080
`;

export const Location = styled.p`
margin: 0
padding: 10px;
color: #808080
`;
export const Stats = styled.ul`
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 25px;
  list-style: none;
  background-color: #f2f3f5;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Label = styled.span`
margin: 0
padding: 10px;
color: #808080`;
export const Quantity = styled.span`
  margin: 0;
  padding: 10px;
  font-weight: 700;
`;

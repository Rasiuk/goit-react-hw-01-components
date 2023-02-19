import styled from 'styled-components';
export function getRandomHexColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
export const Staticstics = styled.section`
  width: 370px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  font-weight: 700;
  color: grey;
`;
export const StatList = styled.ul`
  display: flex;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60px;
  height: 60px;
`;

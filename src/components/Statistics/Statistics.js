import PropTypes from 'prop-types';

import {
  Staticstics,
  Title,
  StatList,
  Item,
  getRandomHexColor,
} from './Statistics.styled';
const styleItem = {
  backgroundColor: getRandomHexColor(),
};
export const Statistics = ({ title, stats }) => {
  return (
    <Staticstics>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item style={{ backgroundColor: getRandomHexColor() }} key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </Item>
        ))}
      </StatList>
    </Staticstics>
  );
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// import { Friend } from './FriendsListItem';
// import friends from '../../friends.json';
import PropTypes from 'prop-types';

import { FriendsList } from './FriendiListItem.styled';
import { FriendListItem } from './FriendsListItem';
export const FriendList = ({ items }) => {
  return (
    <FriendsList>
      {items.map(item => (
        <li key={item.id}>
          <FriendListItem friends={item} />
        </li>
      ))}
    </FriendsList>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

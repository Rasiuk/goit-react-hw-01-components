// import { Friend } from './FriendsListItem';
// import friends from '../../friends.json';
import { FriendListItem } from './FriendsListItem';
export const FriendList = ({ items }) => {
  return (
    <ul class="friend-list">
      {items.map(item => (
        <li key={item.id}>
          <FriendListItem friends={item} />
        </li>
      ))}
    </ul>
  );
};

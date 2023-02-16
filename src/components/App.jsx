import { Profile } from './Profile/Profile';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendsList';
export const App = () => {
  return (
    <div>
      <Profile item={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
    </div>
  );
};

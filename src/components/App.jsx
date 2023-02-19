import { Profile } from './Profile/Profile';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendsList';
import { TransactionsList } from './Transactions/TransactionsList';
import { Container } from 'App.styled';
export const App = () => {
  return (
    <Container>
      <Profile item={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <TransactionsList items={transactions} />
    </Container>
  );
};

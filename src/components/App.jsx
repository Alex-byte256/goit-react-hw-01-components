import Profile from "./Profile/Profile"
import user from "../dataBase/user.json"
import Statistics from './Statistics/Statistics';
import data from  '../dataBase/data.json'
import FriendList from './FriendList/FriendList'
import friends from "../dataBase/friends.json"

export const App = () => {
  return (
    <div>
      <Profile stats={user.stats} location={user.location} avatar={user.avatar} tag={user.tag} username={user.username}/>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};

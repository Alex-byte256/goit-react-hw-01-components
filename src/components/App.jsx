import Profile from "./Profile/Profile"
import user from "../dataBase/user.json"

export const App = () => {
  return (
    <div>
      <Profile stats={user.stats} location={user.location} avatar={user.avatar} tag={user.tag} username={user.username}/>
    </div>
  );
};

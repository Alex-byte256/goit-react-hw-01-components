import css from './FriendList.module.css'
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';



function FriendList ({ friends }){
  return (
    <ul className={css.friendList}>
      {
        friends.map(el => <FriendListItem key={el.id} name={el.name} avatar={el.avatar} id={el.id} isOnline={el.isOnline}/>)
      }
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name:PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
  }))
}



export default FriendList;

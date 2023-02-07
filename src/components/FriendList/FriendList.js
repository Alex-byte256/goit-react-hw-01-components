import css from './FriendList.module.css'
import PropTypes from 'prop-types';



function FriendList ({ friends }){
  return (
    <ul className={css.friendList}>
      {
        friends.map(el => <li key={el.id} className={css.item}>
            <span className={el.isOnline?css.active:css.notActive}></span>
            <img className={css.avatar} src={el.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{el.name}</p>
          </li>
        )
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

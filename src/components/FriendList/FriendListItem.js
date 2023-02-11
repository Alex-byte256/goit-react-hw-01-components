import css from './FriendListItem.module.css'
import PropTypes from 'prop-types';



function FriendListItem ({id,name, isOnline,avatar }){
  return(
    <li key={id}  className={css.item}>
      <span className={isOnline?css.active:css.notActive}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name:PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}

export default FriendListItem;

import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';


export const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};






// import css from './FriendList.module.css';
// import PropTypes from 'prop-types';


// export const FriendList = ({ friends }) => {
  
//   return (
//     <div className={css.friends}>
//       <ul className={css.friends__list}>
//         {friends.map(({ avatar, name, isOnline, id }) => (
//           <li className={css.friends__item} key={id}>
//             <span className={`${css.friends__status} ${css[isOnline]}`}>
//               {isOnline}
//             </span>
//             <img className={css.avatar} src={avatar} alt={name} />
//             <p className={css.friends__name}>{name}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
        
        
// FriendList.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
//   id: PropTypes.number.isRequired,
// };
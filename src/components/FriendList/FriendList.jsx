import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ array }) => {
  return (
    <ul
      className="friend-list"
      style={{
        marginBottom: '50px',
      }}
    >
      {array.map(a => (
        <FriendListItem
          avatar={a.avatar}
          name={a.name}
          isOnline={a.isOnline}
          key={a.id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

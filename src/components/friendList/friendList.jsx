import FriendListItem from './friendListItem/FriendListItem';
import PropTypes from 'prop-types';
import {Exercise3card} from './friendListStyled'

export const FriendList = ({friends}) => {
    return(
      <Exercise3card>
        <FriendListItem
        friends={friends} />
     </Exercise3card>
     
    )
    
  }
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number.isRequired })
    ),
  };
import {FriendCard,FriendLi,FriendName,SpanOnline} from './FriendListItemStyled'
import PropTypes from 'prop-types'

const FriendListItem = ({friends}) => {

    return(
      <FriendCard>
    {friends.map(friend => (
      <FriendLi key={friend.id} >
      <SpanOnline isOnline={friend.isOnline}></SpanOnline>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <FriendName >{friend.name}</FriendName>
    </FriendLi>
    ))}
</FriendCard>
    )
}

FriendListItem.propTypes ={
  friends:PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  )
}

export default FriendListItem;




import FriendListItem from './friendListItem/FriendListItem';

import {Exercise3card} from './friendListStyled'

export const FriendList = ({friends}) => {
    return(
      <Exercise3card>
        <FriendListItem
        friends={friends} />
     </Exercise3card>
     
    )
  };
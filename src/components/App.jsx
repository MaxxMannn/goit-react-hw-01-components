import {Profile} from './profile/profile'
import {Statistics} from './statistics/statistics'
import {FriendList} from './friendList/friendList'
import {TransactionHistory} from './transactionHistory/transactionHistory'
import {AppCard} from './appStyled'
import info from './info/JSONfiles'

export default function App() {
  const {user,data,friends,transactions} = info

    return(
      <AppCard>
       <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
/>
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
     </AppCard>
    )
  };


// import user from './info/user'
// import data from './info/data'
// import friends from './info/friends'
// import transactions from './info/transactions'
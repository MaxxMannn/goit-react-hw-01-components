import DescriptionContainer from './description/description';
import StatsContainer from './stats/stats';

import {Exercise1card} from './profileStyled'

export const Profile = ({username,tag,location,avatar,stats}) => {
    return(
      <Exercise1card>
        <DescriptionContainer 
     username={username}
     tag={tag}
     location={location}
     avatar={avatar}  />
     <StatsContainer 
     stats={stats}
     />
     
     </Exercise1card>
     
    )
  };
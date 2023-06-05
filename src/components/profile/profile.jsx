import DescriptionContainer from './description/description';
import StatsContainer from './stats/stats';
import PropTypes from 'prop-types';
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

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  };
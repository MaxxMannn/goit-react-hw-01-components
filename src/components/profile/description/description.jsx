import {Info,IMG,BigFont} from './descriptionStyled'
import PropTypes from 'prop-types';


 const DescriptionContainer = ({avatar,username,tag,location}) => {

    return(
        <Info>
        <IMG 
          src={avatar}
          alt="User avatar"
        />
        <BigFont  >{username}</BigFont>
        <p>@{tag}</p>
        <p>{location}</p>
      </Info>
    )
}

DescriptionContainer.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  username:PropTypes.string.isRequired,
}

export default DescriptionContainer;
import {QuantityContainer,Quantity} from './statsStyled'
import PropTypes from 'prop-types'

const StatsContainer = ({stats}) => {
    return(
        <QuantityContainer>
    <Quantity>
      <span >Followers</span>
      <span >{stats.followers}</span>
    </Quantity>
    <Quantity>
      <span >Views</span>
      <span >{stats.views}</span>
    </Quantity>
    <Quantity>
      <span >Likes</span>
      <span  >{stats.likes}</span>
    </Quantity>
  </QuantityContainer>
    )
}

StatsContainer.propTypes = {
  stats: PropTypes.exact({
    followers:PropTypes.number.isRequired,
    views:PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
    })
}

export default StatsContainer;
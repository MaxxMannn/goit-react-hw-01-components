import {StatListCard,LiItem,SpanLabel,SpanPercentage} from './statListStyled'
import PropTypes from 'prop-types'

const StatListContainer = ({stats}) => {

    return(
        <StatListCard>
    
    {stats.map(stat => (
      <LiItem key={stat.id}>
      <SpanLabel>{stat.label}</SpanLabel>
      <SpanPercentage>{stat.percentage}%</SpanPercentage>
      </LiItem>
    ))}
      
      </StatListCard>

  
    )
}

StatListContainer.propTypes = {
  stats:PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}

export default StatListContainer;




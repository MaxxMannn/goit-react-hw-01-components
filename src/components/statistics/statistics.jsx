import TitleContainer from './title/title'
import StatListContainer from './statList/statList'
import PropTypes from 'prop-types';
import {Exercise2card} from './statisticsStyled'

export const Statistics = ({stats, title}) => {
  
    return(
      <Exercise2card>
       {title && <TitleContainer 
       title={title}
       />}
       <StatListContainer
       stats={stats} 
       />
     </Exercise2card>
     
    )
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
import TitleContainer from './title/title'
import StatListContainer from './statList/statList'

import {Exercise2card} from './statisticsStyled'

export const Statistics = ({stats}) => {
  
    return(
      <Exercise2card>
       <TitleContainer 
       title="Upload stats"
       />
       <StatListContainer
       stats={stats} 
       />
     </Exercise2card>
     
    )
};

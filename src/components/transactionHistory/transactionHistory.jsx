import Tbody from './tbody/tbody';
import Thead from './thead/thead';
import PropTypes from 'prop-types';
import {Exercise4card} from './transactionHistoryStyled'

export const TransactionHistory = ({items}) => {
    return(
      <Exercise4card>
        <Thead/>
        <Tbody
        items={items} 
        />
     </Exercise4card>
     
    )
  };

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
  };
  
  export default TransactionHistory;
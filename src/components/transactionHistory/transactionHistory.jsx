import Tbody from './tbody/tbody';
import Thead from './thead/thead';

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
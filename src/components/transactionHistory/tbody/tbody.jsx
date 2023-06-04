import {TbodyContainer,TbodyTr,TbodyTd} from './tbodyStyled'
import PropTypes from 'prop-types'


const Tbody = ({items}) => {
  
    return(
      <TbodyContainer>
  
    {items.map(item => (
      <TbodyTr key={item.id}>
      <TbodyTd>{item.type}</TbodyTd>
      <TbodyTd>{item.amount}</TbodyTd>
      <TbodyTd>{item.currency}</TbodyTd>
    </TbodyTr>
    ))}
    </TbodyContainer>
    )
}

Tbody.propTypes ={
  items:PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired ,
      type: PropTypes.string.isRequired ,
      amount: PropTypes.string.isRequired,
      currency:PropTypes.string.isRequired ,
    })
  )
}

export default Tbody;




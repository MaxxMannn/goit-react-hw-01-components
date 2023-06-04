import {TitleCard} from './titleStyled'
import PropTypes from 'prop-types'

const TitleContainer = ({title}) => {
    return(
        <TitleCard>{title}</TitleCard>
    )
}

TitleContainer.propTypes ={
    title:PropTypes.string,
}

export default TitleContainer;
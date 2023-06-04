import styled from '@emotion/styled'

export const FriendCard = styled.ul`
flex-direction:column;
padding:20px 50px;
list-style-type: none;
text-decoration: none;
font-size:20px;

`
export const FriendLi = styled.li`
display:flex;
margin-bottom:20px;
border-bottom:1px solid black;
`

export const FriendName = styled.p`
margin-left:15px;
`

export const SpanOnline = styled.span`
width:15px;
height:15px;
border-radius: 50%;
background-color: ${props =>{
     switch(props.isOnline){
        case true:
                return 'green';
            case false:
                return 'red';
            default:
                 return 'black';
}
     }
}
        
}}
`


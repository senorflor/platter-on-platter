import styled from 'styled-components'

const Card = styled.div`
  background-color: white;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 5px 5px;
  transition: all 0.2s;

  ${props => props.hoverPop ? `&:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.2) 1px 5px 9px;
  }` : ''}
  `

  export default Card
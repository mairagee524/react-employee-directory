import styled from 'styled-components'

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
`

export default CardContainer
import styled from 'styled-components'

export const Title = styled.h1`
    margin-top: 0px;
    font-size: 26px;
    color: #fff;
    margin-bottom: 10px;
`
export const Text = styled.p`
    margin: 0px;
    font-size: 13px;
    color: ${(props) => props.color === 'yellow' && '#f2c841'}
`

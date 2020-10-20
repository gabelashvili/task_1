import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: max-content;
    display: grid;
    grid-template-columns: 0.2fr 1fr;
`
export const Label = styled.p`
    font-size: 14px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 200px;
`
export const Required = styled.span`
    font-size: 13px;
    color: #FF5050;
    margin-left: 5px;
    height: 12px;
`

export const Select = styled.select`
    height: 34px;
    background: #616161;
    font-size: 13px;
    color: white;
    outline: none;
    border-bottom: ${({ isError }) => isError && '1px solid #FF6D6D'};
`
export const BirthDateWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 1fr 1fr;
    grid-column-gap: 10px;
    width: 284px;
`

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

export const Input = styled.input`
    width: 280px;
    height: 34px;
    outline: none;
    background: #616161;
    border: none;
    font-size: 14px;
    text-indent: 20px;
    color: white;
    &:hover {
        transition: all 0.5s ease;
        background: #fff;
        color: black;
    };
    &:focus {
        transition: all 0.5s ease;
        background: #fff;
        color: black;
    };
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    };
  
`

export const Status = styled.div`
    transform: translate(-34px, 0px);
    height: 36px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ isSuccess }) => isSuccess && '#bdbdbd'};
    opacity: ${({ isShow }) => (isShow ? 1 : 0)};
`
export const Img = styled.img`
    width: 15px;
    height: 15px;
`

export const ErrorMsg = styled.div`
    width: 200px;
    padding: 10px;
    top: 5px;
    position: absolute;
    right: -37%;
    z-index: 15;
    border-radius: 2px;
    background: #fff;
    color: #A21D1D;
    font-size: 13px;
    &::before {
        content: '';
        position: absolute;
        left: -9px;
        top: 9px;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid white;
    };
`
export const InputWrapper = styled.div`
    display: flex;
`

export const Select = styled.select`
    height: 34px;
    background: #616161;
    font-size: 13px;
    color: white;
    outline: none;
    border-bottom: ${({ isError }) => isError && '1px solid #FF6D6D'};
`

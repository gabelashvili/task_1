import styled from 'styled-components'

export const Ul = styled.ul`
    width: 280px;
    font-size: 12px;
    color: #000;
    list-style: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
    background-color: white;
    border: 1px solid #ccc;
    cursor: pointer;
    padding: 0;
    & li:first-child {
      border-bottom: 1px solid #ccc;
      padding-bottom: 5px;
    };
    position: absolute;
    z-index: 9;
    margin: 0;
    margin-left: 220px;
    margin-top: 279px;
`
export const Li = styled.li`
    line-height: 11px;
    padding: 0 10px;
    height: 26px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: rgba(0,0,0,0.05);
    }
`

export const Flag = styled.img`
    width: 16px;
    height: 11px;
    margin-right: 5px;
`

export const Button = styled.button`
  width: min-content;
  background: #616161;
  border: none;
  height: 36px;
  display: flex;
  align-items: center;
  &:focus{
    outline: none
  };
  &:hover{
    background-color: rgba(0,0,0,0.1);
  }
`
export const PhoneIndex = styled.p`
  color: white;
  margin-right: 10px;
  margin-left: 5px;
`
export const PhoneIndexLight = styled.span`
  color: #999;
  font-size: 12px;
  margin-left: 10px;
`

export const Wrapper = styled.div`
  width: 284px;
  display: flex;
  flex-direction: ${({ phoneNumber }) => (phoneNumber ? 'row-reverse' : 'row')};
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
    &:hover ~ ${Button} {
      transition: ${({ phoneNumber }) => (phoneNumber && 'all 0.5s ease')};
      background: ${({ phoneNumber }) => (phoneNumber && '#fff')};
      color: black;
    }
    &:focus ~ ${Button} {
      transition: ${({ phoneNumber }) => (phoneNumber && 'all 0.5s ease')};
      background: ${({ phoneNumber }) => (phoneNumber && '#fff')};
      color: black;
    }
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
export const Div = styled.div`
    display: flex;
    align-items: center;
    width: max-content;
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    width: 650px;
    position: relative;
`

export const ErrorMsg = styled.div`
    width: 200px;
    padding: 10px;
    top: 5px;
    position: absolute;
    right: -14%;
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
export const Img = styled.img`
    width: 15px;
    height: 15px;
`
export const ShowError = styled.div`
  display: flex;
  align-items: center;
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

/* eslint-disable no-alert */
import React, { useState } from 'react'
import Input from 'components/Details/Input'
import BirthDate from 'components/Details/Input/BirthDate/index'
import Select from 'components/Details/Input/Select/index'
import styled from 'styled-components'

const Div = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 10px;
`

const Button = styled.button`
    width: 280px;
    padding: 10px;
    background: #cecece;
    border: none;
    color: #1b1b1b;
    border-radius: 2px;
    outline: none;
    transition: all 0.2s ease;
    font-weight: bold;
    margin-left: 222px;
    margin-top: 15px;
    &:hover{
      cursor: pointer;
      background: #43a047;
      color: #fff;
    }
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-left: 49px;
  margin-top: 20px;
`

export const FooterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  text-align: center;
  color: #ccc;
`
export const Link = styled.a`
  text-decoration: none;
  color: #ffca2a;
  margin-left: 3px;
`
const Details = () => {
  const [validData, setValidData] = useState(0)
  const [state, setSate] = useState({
    name: {
      value: '',
      isSubbmitted: false,
      isRequired: true,
    },
    lastName: {
      value: '',
      isSubbmitted: false,
      isRequired: true,
    },
    pid: {
      value: '',
      isSubbmitted: false,
      isRequired: true,
    },
    email: {
      value: '',
      isSubbmitted: false,
      isRequired: false,
    },
    userName: {
      value: '',
      isSubbmitted: false,
      isRequired: true,
    },
    password: {
      value: '',
      isSubbmitted: false,
      isRequired: true,
    },
    day: {
      value: '',
      isSubbmitted: false,
      isRequired: true,
    },
    month: {
      value: '',
      isSubbmitted: false,
      isRequired: true,
    },
    year: {
      value: '',
      isSubbmitted: false,
      isRequired: true,
    },
    phone: {
      value: '',
      isSubbmitted: false,
      isRequired: true,
    },
  })
  const handleChange = (inputValue, inputName, isValid) => {
    if (state[inputName].isRequired) {
      setValidData({
        ...validData,
        [inputName]: isValid,
      })
    }
    setSate({
      ...state,
      [inputName]: {
        value: inputValue,
        isSubbmitted: false,
        isRequired: true,
      },
    })
  }

  const handleSubmit = () => {
    const isAllValid = Object.values(validData).filter(o => o === true)
    if (isAllValid.length >= 9) {
      alert('თქვენ წარმატებით გაიარეთ რეგისტრაცია“')
    } else {
      const newState = Object.keys(state).reduce((initialState, item) => ({
        ...initialState,
        [item]: {
          ...state[item],
          isSubbmitted: state[item].isRequired,
        },
      }), {})
      setSate(newState)
    }
  }
  return (
    <Div>
      <Input
        label='სახელი'
        inputName='name'
        isRequired
        isSubbmitted={state.name.isSubbmitted}
        value={state.name.value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Input
        label='გვარი'
        inputName='lastName'
        isRequired
        isSubbmitted={state.lastName.isSubbmitted}
        value={state.lastName.value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Select label='ქვეყანა' />
      <Input
        label='პირადი ნომერი'
        inputName='pid'
        type='number'
        isRequired
        handleChange={handleChange}
        isSubbmitted={state.pid.isSubbmitted}
        value={state.pid.value}
        handleSubmit={handleSubmit}
      />
      <BirthDate
        handleChange={handleChange}
        day={state.day}
        month={state.month}
        year={state.year}
      />
      <Select
        label='ნომერი'
        phoneNumber
        phoneValue={state.phone.value}
        handleChangePhone={handleChange}
        isSubbmitted={state.phone.isSubbmitted}
      />
      <Input
        label='ელ-ფოსტა'
        inputName='email'
        handleChange={handleChange}
        isSubbmitted={state.email.isSubbmitted}
        value={state.email.value}
        handleSubmit={handleSubmit}
      />
      <Input
        label='მომხმარებელი'
        inputName='userName'
        isRequired
        handleChange={handleChange}
        isSubbmitted={state.userName.isSubbmitted}
        value={state.userName.value}
        handleSubmit={handleSubmit}
      />
      <Input
        label='პაროლი'
        inputName='password'
        isRequired
        handleChange={handleChange}
        isSubbmitted={state.password.isSubbmitted}
        value={state.password.value}
        userName={state.userName.value}
        handleSubmit={handleSubmit}
      />
      <Button onClick={handleSubmit}>რეგისტრაცია</Button>
      <Footer>
        <FooterText>რეგისტრაციის ღილაკზე დაჭერით</FooterText>
        {' '}
        <FooterText>
          ვადასტურებ, რომ ვარ 18 წლის და ვეთანხმები
          <Link href='https://www.lider-bet.com/web/ka/promotions?page=betmarket-rules'>
            საიტის წესებს და პირობებს
          </Link>
        </FooterText>
      </Footer>
    </Div>
  )
}

export default Details

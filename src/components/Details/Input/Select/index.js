/* eslint-disable import/no-dynamic-require */
import React, { useState, useEffect, useRef } from 'react'
import {
  Ul,
  Li,
  Flag,
  Button,
  PhoneIndex,
  PhoneIndexLight,
  Wrapper,
  Input,
  Label,
  Required,
  Div,
  ErrorMsg,
  Img,
  ShowError,
  Status,
} from 'components/Details/Input/Select/styles'
import { countryList, generateUrl, validation } from 'helpers'

const Select = ({
  phoneNumber,
  phoneValue,
  handleChangePhone,
  isSubbmitted,
  label,
}) => {
  const [selected, setSelected] = useState(countryList[0])
  const [isOpen, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState()
  const handleClick = () => setOpen(!isOpen)
  const ref = useRef()
  const {
    isValid,
    msg,
  } = validation
    .phoneNumber(phoneNumber ? phoneValue : '', selected.name_en === 'Georgia')
  const handleSelect = (country) => () => {
    setSelected(country)
    setOpen(!isOpen)
  }
  const handleClickOutside = (event) => {
    const inputId = phoneNumber ? 'phone_select' : 'country_select'
    if (ref.current && !ref.current.contains(event.target)
     && !(event.target.id === inputId
     || event.target.parentNode.id === inputId)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  const handleChange = (e) => {
    const newValue = e.target.value
    const isExsit = countryList.find((country) => country.name_en
      .toLocaleLowerCase()
      .startsWith(newValue.toLocaleLowerCase()))
    if (phoneNumber) {
      handleChangePhone(newValue, 'phone', isValid)
    } else if (newValue.length === 0) {
      setInputValue('')
    } else if (isExsit) {
      setInputValue(`${isExsit.name_en} (${isExsit.name_native})`)
      setSelected(isExsit)
    } else {
      setInputValue(newValue)
    }
  }

  useEffect(() => {
    if (!phoneNumber) {
      const newValue = `${selected.name_en} (${selected.name_native})`
      setInputValue(newValue)
    }
  }, [selected, phoneNumber])

  const handleBlur = (e) => {
    if (!phoneNumber) {
      const newValue = e.target.value
      const isExsit = countryList.find((country) => country.name_en
        .toLocaleLowerCase()
        .startsWith(newValue.toLocaleLowerCase()))
      if (!isExsit) {
        setInputValue(`${countryList[0].name_en} 
        (${countryList[0].name_native})`)
      }
    }
  }

  return (
    <Div>
      {phoneNumber
      && !isValid
      && phoneValue.length > 0
     && <ErrorMsg>{msg}</ErrorMsg>}
      <Label>
        {label}
        <Required>*</Required>
      </Label>
      <ShowError>
        <Wrapper phoneNumber={phoneNumber}>
          <Input
            type='text'
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={phoneNumber && '--- -- -- --'}
          />
          <Button
            onClick={handleClick}
            id={phoneNumber ? 'phone_select' : 'country_select'}
          >
            {' '}
            <Flag src={generateUrl(selected.name_en)} alt='' />
            {phoneNumber && (
            <PhoneIndex>
              +
              {selected.index}
            </PhoneIndex>
            )}
          </Button>
        </Wrapper>
        {phoneNumber && (
          <Status
            isSuccess={isValid}
            isShow={phoneValue.length > 0 || isSubbmitted}
          >
            <Img
              error
              src={isValid ? 'https://www.lider-bet.com/gui/web/css/images/field_status_accept.png'
                : 'https://www.lider-bet.com/gui/web/css/images/field_error.png'}
            />
          </Status>
        )}
      </ShowError>
      {isOpen && (
      <Ul ref={ref}>
        {countryList.map((country) => (
          <Li onClick={handleSelect(country)}>
            <Flag src={generateUrl(country.name_en)} alt='' />
            {`${country.name_en} (${country.name_native})`}
            {phoneNumber && (
            <PhoneIndexLight>
              +
              {country.index}
            </PhoneIndexLight>
            )}
          </Li>
        ))}
      </Ul>
      )}
    </Div>
  )
}

export default Select

import React from 'react'
import {
  Div, Label, Required, Input, Img, Status, ErrorMsg, InputWrapper,
} from 'components/Details/Input/styles'
import { toGeo, validation } from 'helpers'

const InputFiled = ({
  inputName,
  label,
  isRequired,
  type,
  value,
  handleChange,
  userName,
  isSubbmitted,
}) => {
  const onChange = (event) => {
    const {
      isValid,
    } = validation[inputName](value, inputName === 'password' && userName)
    const word = toGeo(event.target.value)
    if (event.target.name === 'name' || event.target.name === 'lastName') {
      handleChange(word, inputName, isValid)
    } else {
      handleChange(event.target.value, inputName, isValid)
    }
  }

  const handleOnBlur = () => {
    if ((!validation.name(value, inputName === 'password' && userName).isValid
     && (inputName === 'name' || inputName === 'lastName')) || isSubbmitted) {
      handleChange('', inputName)
    }
  }
  const {
    isValid,
    msg,
  } = validation[inputName](value, inputName === 'password' && userName)

  return (
    <Div>
      <Label>
        {label}
        {isRequired && <Required>*</Required>}
      </Label>
      <InputWrapper>
        <Input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={handleOnBlur}
          name={inputName}
        />
        <Status
          isSuccess={isValid}
          isShow={value.length > 0 || isSubbmitted}
        >
          <Img
            error
            src={isValid ? 'https://www.lider-bet.com/gui/web/css/images/field_status_accept.png'
              : 'https://www.lider-bet.com/gui/web/css/images/field_error.png'}
          />
        </Status>
      </InputWrapper>
      {!isValid && value.length > 0
          && msg
           && <ErrorMsg>{msg}</ErrorMsg>}
    </Div>
  )
}

export default InputFiled

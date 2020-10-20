import React from 'react'
import {
  Select,
  Label,
  Required,
  Div,
  BirthDateWrapper,
} from 'components/Details/Input/BirthDate/styles'
import { validation } from 'helpers'

const BirthDate = ({
  handleChange, day, month, year,
}) => (
  <Div>
    <Label>
      დაბადების თარიღი
      <Required>*</Required>
    </Label>
    <BirthDateWrapper>
      <Select
        name='day'
        onChange={(e) => handleChange(e.target.value, e.target.name,
          validation.birthDate(
            parseInt(day.value, 10), day.isSubbmitted,
          ).isValid)}
        isError={validation.birthDate(
          parseInt(day.value, 10), day.isSubbmitted,
        ).isValid}
      >
        <option value='volvo'>რიცხვი</option>
        {new Array(31).fill()
          .map((el, index) => <option value={index}>{index}</option>)}
      </Select>
      <Select
        name='month'
        isError={validation.birthDate(
          parseInt(month.value, 10), month.isSubbmitted,
        ).isValid}
        onChange={(e) => handleChange(e.target.value, e.target.name,
          validation.birthDate(
            parseInt(month.value, 10), month.isSubbmitted,
          ).isValid)}
      >
        <option value='volvo'>თვე</option>
        {new Array(12).fill()
          .map((el, index) => <option value={index + 1}>{index + 1}</option>)}
      </Select>
      <Select
        name='year'
        isError={validation.birthDate(
          parseInt(year.value, 10), year.isSubbmitted,
        ).isValid}
        onChange={(e) => handleChange(e.target.value, e.target.name,
          validation.birthDate(
            parseInt(year.value, 10), year.isSubbmitted,
          ).isValid)}
      >
        <option value='volvo'>წელი</option>
        {new Array(63).fill()
          .map((el,
            index) => <option value={2002 - index}>{2002 - index}</option>)}
      </Select>
    </BirthDateWrapper>
  </Div>
)

export default BirthDate

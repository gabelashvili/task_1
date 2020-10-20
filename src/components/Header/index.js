import React from 'react'
import { Title, Text } from 'components/Header/styles'

const Header = () => (
  <>
    <Title>რეგისტრაცია</Title>
    <Text color='yellow'>
      სავალდებულოა ყველა ველი შეივსოს კორექტულად
      მხოლოდ ლათინური ასოებით და ციფრებით.
    </Text>
    <Text>
      <b>ყურადღება:</b>
      {' '}
      რეგისტრაციისას მითითებული პირადი მონაცემების
      უზუსტობის შემთხვევაში, კომპანია იტოვებს უფლებას
      შეგიზღუდოთ საიტით სარგებლობა!
    </Text>
  </>
)

export default Header

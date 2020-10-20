import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import Details from 'components/Details'

const Div = styled.div`
  background-color: #424242;
  width: 1000px;
  margin: auto;
  padding: 30px 50px 50px 50px;
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
`

const Banner = styled.img`
  width: 316px;
  height: 487px;
  border-left: 1px solid #616161;
  margin-top: 10px;
  padding-left: 28px;
  opacity: 0.8;
  transition: all 0.3s;
  &:hover {
    opacity: 1
  }
`

function App() {
  return (
    <Div>
      <Header />
      <Wrapper>
        <Details />
        <a href='https://www.lider-bet.com/web/ka/promotions?page=betmarket-rules'>
          <Banner src='https://www.lider-bet.com/gui/web/css/images/betmarket_ban.jpg' />
        </a>
      </Wrapper>
    </Div>
  )
}

export default App

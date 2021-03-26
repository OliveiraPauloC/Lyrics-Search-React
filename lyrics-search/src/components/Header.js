import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const HeaderContainer = styled.div`
    font-family: 'Amatic SC', cursive;
    display: flex;
    justify-content: center;
    color: #31326f;
    text-shadow: 2px 2px 1px #ffc93c;
    font-size: 30px;
    background-color: #dbf6e9;
`

export default class App extends React.Component {
  
    render() {
  
      return (
        <HeaderContainer>
          <h1>Buscador de letras musicais</h1>
        </HeaderContainer>
      )
    }
  }
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Header from './components/Header'
import SearchLyrics from './components/SearchLyrics'

export default class App extends React.Component {
  
  render() {

    return (
      <div>
        <Header />
        <SearchLyrics />
      </div>
    )
  }
}
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    div {
        background-color: #dbf6e9;
        display: flex;
        justify-content: center;
        width: 100%;
        padding-bottom: 20px;

        input {
            margin: 10px;
            width: 300px;
            height: 30px;
            font-size: 26px;
            font-weight: bold;
            font-family: 'Amatic SC';
            color: #9ddfd3;
            border: none;
            border-bottom: 4px solid #ffc93c;
            background-color: #31326f;

            ::placeholder {
                font-family: 'Amatic SC';
                font-size: 26px;
                font-weight: bold;
                color: #9ddfd398;
            }
        }

        button {
            margin: 10px;
            width: 100px;
            height: 35px;
            font-size: 26px;
            font-weight: bold;
            font-family: 'Amatic SC';
            text-shadow: 1px #31326f;
            cursor: pointer;
            background-color: #ffc93c;
            color: #31326f;

            :hover {
                background-color: #9ddfd3;
            }
        }
    }

    pre {
        padding-top: 20px;
        font-size: 20px;
        font-family: 'Roboto';
        font-weight: bold;
        color: #ffc93c;
    }
    
`

export default class SearchLyrics extends React.Component {
  state = {
    singer: '',
    music: '',
    lyrics: ''
  }

  handleSinger = (event) => {
    this.setState({ singer: event.target.value })
  }

  handleMusic = (event) => {
    this.setState({ music: event.target.value })
  }

  findLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/${this.state.singer}/${this.state.music}`)
         .then((response) => {
           console.log(response)
           this.setState({ lyrics: response.data.lyrics })
         })

         .catch((error) => {
           this.setState({ lyrics:'' })
           console.log(error)
         })
  }

  render() {

    return (
      <Container>
        <div>
            <input 
            onChange={this.handleSinger}
            value={this.state.singer}
            placeholder='Digite o artista'
            />
            <input 
            onChange={this.handleMusic}
            value={this.state.music}
            placeholder='Digite a música'
            />
            <button onClick={this.findLyrics}>BUSCAR</button>
        </div>
        <pre>{this.state.lyrics}</pre>
      </Container>
    )
  }
}
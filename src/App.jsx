import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
`

const Header = styled.header`
background-color: tomato;
border-bottom: solid;
height: 28vh;
display: flex;
align-items: center;
justify-content: space-evenly;

`

const Logo = styled.img `
width: 10vw;
`
const NavBar = styled.nav `
ul{
  width:34vw;
  display:flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
}
li{
  font-size: 2.4rem;
  color:white;
  cursor: pointer;
}
`



export default function App() {

  return (
    <>
      <EstiloGlobal />
      <Header>
        <Logo src="https://encurtador.com.br/hqDP7" alt="" />
        <NavBar>
          <ul>
            <li>Início</li>
            <li>Contato</li>
            <li>Como chegar</li>
          </ul>
        </NavBar>
      </Header>
    </>
  )
}

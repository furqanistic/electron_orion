import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/Layout/Sidebar'
const Back = styled.div`
  background-color: #013701;
  display: flex;
  min-height: 100vh;
`
const Right = styled.div`
  width: calc(100vw - 15em);
  background-color: red;
`
const Left = styled.div`
  width: 15em;
`
const Layout = ({ children }) => {
  return (
    <Back>
      <Left>
        <Sidebar />
      </Left>
      <Right>{children}</Right>
    </Back>
  )
}

export default Layout

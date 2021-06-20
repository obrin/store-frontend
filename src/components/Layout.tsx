import React from 'react'
import Navigation from './Navigation'
import Container from 'react-bootstrap/Container'

const Layout = (props: any) => (
  <Container>
    <Navigation />
    {props.children}
  </Container>
)

export default Layout

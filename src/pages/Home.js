import React from 'react'
import styled from 'styled-components'


const Body = styled.div `
  width: 100%;
  height: 100vh;
`

const Container = styled.div `

  width: 960px;
  margin: 0 auto;
  height: 100%;
  display:flex;
  justify-content: center;
  
`

const Text = styled.p `

  font-size: 60px;
  color: white;
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
`


export const Home = () => {
  return (
    <Body>
       <Container>
        <Text> Home </Text></Container>
    </Body>
   
  )
}

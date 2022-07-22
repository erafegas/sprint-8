import React from 'react'
import styled from 'styled-components';
import { useRef, useState } from 'react';

const Container =  styled.div `
    width: 960px;
    margin: 0 auto;
    height: 400px;
    margin-top: 150px;
    display: flex;
    justify-content: center;
`

const Formulario = styled.form `
    width: 50%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Texto = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 25px;
    color: white;
`

const Texto1 = styled.div `
    width: 30%;
`

const Button = styled.button `
    margin-top: 25px;
    font-size: 18px;
`




 const Login = () => {


    const inputUser = useRef()
    const inputPassword = useRef()


    const handleLogin = () => {
        const user = {
            username: inputUser.current.value,
            password: inputPassword.current.value,
        }


        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = '/'

    }


  return (
    <Container>
        <Formulario>
            <Texto>
                <Texto1> <label> Usuario: </label></Texto1>
                <input ref={inputUser} type='text' />
            </Texto>
            <Texto>
            <Texto1>   <label> Password: </label> </Texto1>
                <input ref={inputPassword} type='password' />
            </Texto>
            <Texto>
            <Texto1>  
              <Button type='button' onClick={() => handleLogin()}> Log In</Button> </Texto1>
              </Texto>
        </Formulario>
    </Container>
  )
}

export default Login;

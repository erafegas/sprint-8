import React from 'react'
import styled from 'styled-components'
import {Link } from "react-router-dom";

const Container = styled.div `
    width: 70%;
    margin: 0 auto;
    margin-top: 15px;
    height: 150px;
    background-color: black;
    display: flex;
`

const BoxLeft = styled.div `
    width: 33.33%;
    height: 150px;
`

const Icons = styled.div `
    width: 80%;
    height: 40px;
    display: flex;
    margin: 5px;
`
const Facebook = styled.div `
    background-color: #999;
    height: 20px;
    width: 20px;
    -webkit-mask: url(https://static-mh.content.disney.io/starwars/assets/shared/icon_facebook-aec3b685b1a1.svg) no-repeat 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    &:hover {
        background-color: #aaa;
}
`

const Instagram = styled.div `
    background-color: #999;
    height: 20px;
    width: 20px;
    -webkit-mask:url(https://static-mh.content.disney.io/starwars/assets/shared/icon_instagram-be8807d03d5f.svg) no-repeat 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    margin-left: 15px;
    &:hover {
        background-color: #aaa;
}
`

const Twitter = styled.div `
    background-color: #999;
    height: 20px;
    width: 20px;
    -webkit-mask:url(https://static-mh.content.disney.io/starwars/assets/shared/icon_twitter-bde9a7f5abaa.svg) no-repeat 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    margin-left: 15px;
    &:hover {
        background-color: #aaa;
}
`
const Youtube = styled.div `
    background-color: #999;
    height: 20px;
    width: 20px;
    -webkit-mask:url(https://static-mh.content.disney.io/starwars/assets/shared/icon_youtube-ed78c6ee1c7d.svg) no-repeat 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    margin-left: 15px;
    &:hover {
        background-color: #aaa;
}
`

const Separator = styled.div `
    border-top: 1px solid #343434;
    margin-left: 15px;
    width: 1px;
    height: 28px;
    background: #343434;
`

const BorderKids = styled.div `
    width: 43px;
    height: 15px;
    margin: 3px 0 0 10px;
    background-color: #7a7a7a;
    border-radius: 16px;
    &:hover {
        background-color: #aaa;
    }
`

const Kids = styled.div `
    background-color: black;
    margin: -5px;
    height: 25px;
    width: 25px;
    -webkit-mask:url(https://static-mh.content.disney.io/starwars/assets/shared/icon_kids-dc39fc54f6c2.svg) no-repeat 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    margin-left: 10px;
`

const Logo = styled.div `
    width: 33.33%;      
    height: 150px;
`

const ImgLogo = styled.a `
    display:flex;
    
    width: 290px;
    height: 128px;
    background-image: url(https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png);
    background-repeat: no-repeat;
    background-position: center;
`

const BoxRight = styled.div `
    width: 33.33%;      
    height: 150px;
`

const ContainerInput = styled.div`

width: 26px;
margin: 0;
border-radius: 4px;
background-color: #343434;
box-shadow: none;
border: 0;
position: relative;
width: 248px;
margin: auto;
opacity: 0.7;
height: 40px;
`

const Input = styled.input `
background-color: transparent;
width: 98%;
height: 90%;
visibility: visible;
color: #fff;
display:flex;
justify-content: end;
`

const Login = styled.div `
color :#fff;
margin-top: 15px;
text-align: right;
font-family: "DIN Next W01 Regular", Helvetica, Arial, sans-serif;
letter-spacing: 4px;
&  a {text-decoration: none;
    color: #aaa;
}
`



export const Header = () => {
  return (
    <Container> 
        <BoxLeft >
            <Icons>  
                <a href='https://www.facebook.com/starwars.es/?brand_redir=169299103121699'> <Facebook></Facebook></a>  
                <a href='https://www.instagram.com/starwars/'> <Instagram> </Instagram> </a>
                <a href='https://twitter.com/starwars'> <Twitter> </Twitter> </a>
                <a href='https://www.youtube.com/user/starwars'>  <Youtube> </Youtube> </a>
                <Separator />
                <BorderKids> 
                <a href='https://www.starwarskids.com/'>  <Kids> </Kids> </a>
                </BorderKids> 
            </Icons>      
        </BoxLeft>
            <Logo > <ImgLogo> </ImgLogo>   
                </Logo>
        <BoxRight>
            <ContainerInput> 
                <Input placeholder='Search Star Wars' /> 
                <Login> <Link to="/Login/"> <a>  LOG IN </a></Link>  </Login>
            </ContainerInput> 
        </BoxRight>
    </Container>
  )
}


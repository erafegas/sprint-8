import React from 'react'
import { Header } from './Header';
import {Link, Outlet } from "react-router-dom";
import styled from 'styled-components';


const Navs = styled.div `
    width: 100%;
    height:40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    &  a {text-decoration: none;
        color: #aaa;
        
    }

    & a:hover {
        color: white;
    }
`

const LinksF = styled.div `

width: 960px;
height: auto;
margin: 0px auto;
display: flex;
justify-content: center;
margin-left: 610px;
`


const Links = styled.div `
border-left: 1px solid grey;
border-right: 1px solid grey;
padding: 5px;
margin: 0px;
font-size: 25px;

`




export const Layout = () => {
  return (
    <main>
        <Header/>
            <nav><Navs><LinksF>
                <Link to="/"> <Links> <a >  HOME</a></Links> </Link>
                <Link to="/starships/"><Links> STARSHIPS  </Links></Link></LinksF>
          </Navs>   </nav>
        <section>
            <Outlet />
        </section>
    </main>
  )
}

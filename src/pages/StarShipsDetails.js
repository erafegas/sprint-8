import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div `
    width: 100%;
    height: auto;
    padding-bottom: 20px;
    background-color: black;
    padding-top: 70px;
    color: #aaa;
    display: flex;
    justify-content: center;
`

const Ficha = styled.div `

    width: 960px;
    margin: 0 auto;
    height: auto;
   

`

const Img = styled.img `
    width: 100%;
    height:600px;
`

const Name = styled.h1 `
    font-size: 42px;
`

const Texto = styled.div `
display: flex;
`

const Texto1 = styled.div `
width: 50%;
font-size: 24px;

`

const Texto2 = styled.div `
width: 50%;
font-size: 24px;
color: white;

`


const StarShipsDetails = (props) => {
    const params = useParams()
    const id = params.starshipId
    const [info, setInfo] = useState({})

 


    async function loadApi() {
        const request = await fetch(`https://swapi.py4e.com/api/starships/${id}/`)
        const data = await request.json()
        setInfo(data)
    }

    useEffect(() => {
        loadApi()
    }, [])

    return (
        
              
                <Container> <Ficha> 
                   
                                        
                            <Img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} />
                     
                      
                    
                        <Name> {info.name} </Name>
                        <Texto> 
                       
                        <Texto1> Modelo:</Texto1>  <Texto2> {info.model}  </Texto2> </Texto>
                        <Texto> 
                       
                        <Texto1> Tripulación: </Texto1><Texto2> {info.crew}</Texto2></Texto>
                        <Texto> 
                        <Texto1>  Pasajeros: </Texto1> <Texto2> {info.passengers}</Texto2></Texto>
                        <Texto> <Texto1> Tamaño:  </Texto1><Texto2> { info.length }</Texto2></Texto>
                        <Texto> <Texto1> Manufactura: </Texto1> <Texto2>{info.manufacturer}</Texto2></Texto>
                       
               </Ficha>    
                </Container>  
        
    )
}

export default StarShipsDetails
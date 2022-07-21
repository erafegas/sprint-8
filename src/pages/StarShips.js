import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


  const Container = styled.div `
    width: 960px;
    height: auto;
    margin: 0px auto;
    background-color: black;
    color: white;
    padding-top: 50px;
  `

  const Capsula = styled.div `
    padding: 15px;
    margin: 15px;
    width: 100%;
    background-color:#222;
    margin-top: 20px;
  `

  const Texto = styled.div `
    margin-left: 15px;
    color: #aaa;
    font-family: "DIN Next W01 Regular", Helvetica, Arial, sans-serif;
    & a {text-decoration: none; color: #aaa;}
  `

    
function StarShips()  {

  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState(undefined);
  const [page, setPage] = useState(1);

  async function loadStarShips(){
    const request = await fetch (nextPage ? nextPage : "https://swapi.py4e.com/api/starships");
    const data = await request.json();
    

    const mappedResults = data.results.map(
      result => {
        const urlSplitted = result.url.split('/')
        result.id = urlSplitted.at(-2)
        return result
      }
    );

    setStarships(mappedResults);
    setNextPage(data.next);
  }

  useEffect(() => {
    loadStarShips()
  }, [page])

  return (
    <Container>
      <div>
        {starships.map(starship => { 
          return  (
          
          <Capsula key={`starship-${starship.id}`}> 
             <Texto> <h2> <Link to={"/starships/"+starship.id}>  {starship.name}</Link></h2></Texto> 
             
            <Texto> {starship.model}     </Texto> 
          </Capsula>
          )
        })}  
         <div> 
          {nextPage && 
            <button onClick={() => setPage(page + 1)}> Cargar mas </button>}
        </div>
      </div>
    </Container>
  );
}
export default StarShips;

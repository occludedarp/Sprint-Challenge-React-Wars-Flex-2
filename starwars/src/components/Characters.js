import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row} from 'reactstrap';
import styled from 'styled-components';
import CharacterCard from './CharacterCards';

const Header = styled.div`
  background: #90bdbf;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: 5px;
`

const HeaderTitle = styled.h1`
  text-align: center;
  color: whiteSmoke;
  font-size: 5rem;
`

const Characters = () => {
const [starWarsChar, setStarWarsChar] = useState([]);

useEffect(() => {
  axios.get('https://swapi.co/api/people/')
    .then( response => {
      console.log(response.data)
      setStarWarsChar(response.data.results)
    })
    .catch( error => {
      console.log( "no data was returned", error)
    })
}, [])

  return (
    <Container>
      <Header>
        <HeaderTitle className="Header">React Wars</HeaderTitle>
      </Header>
      <Row>
      {starWarsChar.map((details, index) => {
        return (
          <CharacterCard
            key={index}
            characterName={details.name}
            characterHeight={details.height}
            characterEyeColor={details.eye_color}
            characterHairColor={details.hair_color}
            characterBirthdate={details.birth_year}
          />
        )
      })}
      </Row>
    </Container>
    
  );

}

export default Characters;


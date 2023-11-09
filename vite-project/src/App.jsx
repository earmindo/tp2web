/*
Armindo Ephraim
Mohamed Aziz Taieb
*/

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import bowser from './assets/images/bowser.webp';
//regler index.css sans index.css
import './index.css';
import jsonData from './assets/characters.json';
import React, { useState } from 'react';


const Container = styled.div`
background-color: black;
color:white;
height:100vh;
width:100vw;
margin:0;
overflow:hidden;
display:flex;
align-items:center;
justify-content:center;
`

const ContainerWithoutFlex = styled.div`
  border: 5px solid rgb(111,41,97);
  display: grid !important;
  grid-template-areas:
    "box1 box2 box3 box3"
    "box4 box4 box3 box3"
    "box5 box6 box7 box8";
  gap:5px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  inline-size: 500px;
  width:900px;
`

const ContainerImg = styled.div`
background-color: #383838;
color:white;
height:400px;
width:600px;
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Img = styled.img`
  width:200px;
`;

const TextBowser = styled.p`
color:white;
font-size:30px;
`

const BtnConnection = styled.button`
color:black;
background-color:#d9d9d9;
border-radius:10px;
padding-top:10px;
padding-bottom:10px;
padding-right:40px;
padding-left:40px;
font-size:30px;
border:none;
`

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <Container>
          <ContainerImg>
            <Img src={bowser} />
            <TextBowser>
              Hey pas si vite ! Vous n'êtes pas connecté !
            </TextBowser>
            <BtnConnection onClick={handleLogin}>Se connecter</BtnConnection>
          </ContainerImg>
        </Container>
      ) : (

        <Container>
          <ContainerWithoutFlex>
            {jsonData.map((item, index) => (
              <div className={`box${index +1} boite`} key={index}>
                <img src={`/src/assets/images${item.imageUrl}`} width="50px"/>
                <strong>{item.name}</strong>: {item.description}
              </div>
            ))} 
        </ContainerWithoutFlex>
        </Container>


      )}
    </>
  );
}


export default App;

/*
        <ul>
          {jsonData.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>: {item.description}
            </li>
          ))}
        </ul>
*/
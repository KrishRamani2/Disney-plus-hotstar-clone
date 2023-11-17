import React from 'react';
import styled from 'styled-components';
import img from '../images/viewers-disney.png'; 
import img1 from '../images/viewers-marvel.png'; 
import img2 from '../images/viewers-pixar.png'; 
import img3 from '../images/viewers-national.png'; 
import img4 from '../images/viewers-starwars.png'; 

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src={img} alt="Disney" />
      </Wrap>
      <Wrap>
        <img src={img1} alt="Marvel" />
      </Wrap>
      <Wrap>
        <img src={img2} alt="Pixar" />
      </Wrap>
      <Wrap>
        <img src={img3} alt="National Geographic" />
      </Wrap>
      <Wrap>
        <img src={img4} alt="Star Wars" />
      </Wrap>
      
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px; 
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

`;

const Wrap = styled.div`
  overflow: hidden; 
  cursor:pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
              rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
              transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

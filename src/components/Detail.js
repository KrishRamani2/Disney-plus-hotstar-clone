// import React from 'react'
// import styled from 'styled-components'
// function Detail() {
//   return (
//     <Container>
//       <Background>
//         <img src = "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5603/1375603-i-b338b4f8536a" alt="" />
//       </Background>
//       <ImageTitle>
//         <img src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/5606/1375606-t-d0a8b2e16cfe"  alt="" />
//       </ImageTitle>
//       <Controls>
//         <PlayButton>
//         <i class="fa-solid fa-play"></i>
//         <span>Play</span>
//         </PlayButton>
//         <TrailerButton>
//         <i class="fa-solid fa-play "></i>
//         <span>Trailer</span>
//         </TrailerButton>
//         <AddButton>
//         <i class="fa-solid fa-add"></i>
//         </AddButton>
//         <GroupWatchButton>
//         <i class="fa-solid fa-users"></i>
//         </GroupWatchButton>
//       </Controls>
//       <SubTitle>
//       2018· 7m · English · <span> U </span>
//       </SubTitle>
//       <Description>
//         An ageing Chinese mom gets another chance at 
//         <br/>motherhood when one of her dumplings springs 
//         <br/>to life as a lively,giggly dumpling boy.

//         <br/>Animation | Fantasy | Shorts | Kids 
//       </Description>

//     </Container>
   
//   )
// }

// export default Detail;

// const Container = styled.div`
//  min-height:calc(100vh - 70px);
//  padding:0 calc(3.5vw + 5px);
//  position: relative;
// `
// const Background = styled.div`
// position: fixed;
// top:0;
// bottom:0;
// right:0;
// left:0;
// z-index:-1;
// opacity:0.8;
// margin-top:50px;

// img{
//   width:100%;
//   height:100%;
//   object-fit:cover;
// }
// `
// const ImageTitle = styled.div`
// height:30vh;
// min-height:170px;
// width:35vw;
// min-width:200px;

// img {
//   width:100%;
//   height:100%;
//   object-fit:contain;
// }
// `
// const Controls = styled.div`
// display:flex;
// `
// const PlayButton = styled.div`
// border:2px solid black;
// background:white;
// margin-right:22px;
// padding:0 24px;
// display:flex;
// align-items:center;
// cursor:pointer;
// border-radius:5px;
// font-size:15px;
// width:auto;
// height:auto;
// background: rgb(249, 249, 249);
// border:none;
//  span {
//   padding:2px;
//  }

// letter-spacing:1.8px;
// &:hover {
//   transform:scale(1.04);
//   background-color: rgba(0,0,0,0.6);
//   color:white;
// }
// `
// const TrailerButton = styled(PlayButton)`
// i {
//   color:white;
// }
// background-color: rgba(0,0,0,0.6);
// color:white;
// border:2px solid white;
// &:hover {
//   background:white;
//   color:black;
//   i {
//     color:black;
//   }
// }

// `
// const AddButton = styled.button`
// width:44px;
// cursor:pointer;
// height:44px;
// display:flex;
// align-items:center;
// justify-content:center;
// border-radius:50%;
// border:1px solid white;
// padding:2px;
// background-color: rgba(0,0,0,0.6);
// margin-right:13px;
// i {
//   font-size:16px;

// }

// &:hover {
//   background:transparent;
//   color:white;
// }
// `
// const GroupWatchButton = styled(AddButton)`

// `

// const SubTitle = styled.div`
// font-size:15px;
// color:rgb(249,249,249);
// min-height:20px;
// margin-top:20px;
// `
// const Description = styled.div`
// font-size:19px;
// color:rgb(249,249,249);
// line-height:1.4;
// margin-top:16px;

// `
/* global scrollPosition */
import React, { useState , useEffect , useRef } from 'react';
import styled from 'styled-components';
import Movies from './Movies';
function Detail() {
  const [isAdded, setIsAdded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleAddClick = () => {
    setIsAdded(true);
  };

  return (
    <>
      {!isAdded ? (
        <Container>
          <Background>
            <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5603/1375603-i-b338b4f8536a" alt="" />
          </Background>
          <ImageTitle>
            <img src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/5606/1375606-t-d0a8b2e16cfe" alt="" />
          </ImageTitle>
          <Controls>
            <PlayButton>
             <a href="https://www.hotstar.com/in/movies/bao/1260023101"><i className="fa-solid fa-play"></i>
              <span>Play</span></a> 
            </PlayButton>
            <TrailerButton>
            <a href="https://www.hotstar.com/in/movies/bao/1260023101"><i className="fa-solid fa-play"></i>
              <span>Trailer</span></a> 
            </TrailerButton>
            <AddButton onClick={handleAddClick}>
              <i className="fa-solid fa-add"></i>
            </AddButton>
            <GroupWatchButton>
              <i className="fa-solid fa-users"></i>
            </GroupWatchButton>
          </Controls>
          <SubTitle>
            2018· 7m · English · <span> U </span>
          </SubTitle>
          <Description>
            An ageing Chinese mom gets another chance at
            <br />motherhood when one of her dumplings springs
            <br />to life as a lively, giggly dumpling boy.
            <br />Animation | Fantasy | Shorts | Kids
          </Description>
        </Container>
      ) : (
        <AddedContentPage>
          <h1>ookkk</h1>
        </AddedContentPage>
      )}
      <Movies />
    </>
  );
}

export default Detail;
export {AddedContentPage};

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;
  margin-top: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  background: ${(props) => (props.scrollPosition > 100 ? 'black' : 'transparent')};
  transition: background 0.3s ease-out;
`;


const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
`;

const PlayButton = styled.div`
  border: 2px solid black;
  background: white;
  margin-right: 22px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  font-size: 15px;
  width: auto;
  height: auto;
  background: rgb(249, 249, 249);
  border: none;
  a{  text-decoration:none;}

  span {
    padding: 2px;
  }
  i {
    color: black;
  }
  letter-spacing: 1.8px;
  &:hover {
    transform: scale(1.04);
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    i {
      color: white;
    }
    span {
      color:white;
    }
    border:2px solid white;
  }
`;

const TrailerButton = styled(PlayButton)`
  span {
    color: white;
  }
  i {
    color: white;
  }
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: 2px solid white;
  &:hover {
    background: white;
    color: black;
    i {
      color: black;
    }
  }
`;

const AddButton = styled.button`
  width: 44px;
  cursor: pointer;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid white;
  padding: 2px;
  background-color: rgba(0, 0, 0, 0.6);
  margin-right: 13px;
  i {
    font-size: 16px;
  }

  &:hover {
    background: transparent;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)``;

const SubTitle = styled.div`
  font-size: 15px;
  color: rgb(249, 249, 249);
  min-height: 20px;
  margin-top: 20px;
`;

const Description = styled.div`
  font-size: 19px;
  color: rgb(249, 249, 249);
  line-height: 1.4;
  margin-top: 16px;
`;

const AddedContentPage = styled.div`
  text-align: center;
  padding: 20px;
  h1 {
    color: white;
  }
  background: rgba(0, 0, 0, 0.8);
  min-height: 100vh;
`;

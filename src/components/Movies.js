// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// function Movies() {
//   const [movies, setMovies] = useState([]);


// useEffect(() => {
//     const apiKey = '29f3e355d7ab8ff8646dbd0dd663a239';
//     const apiEndpoint = 'https://api.themoviedb.org/3/movie/popular';
  
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${apiEndpoint}?api_key=${apiKey}`);
//         setMovies(response.data.results);
//         console.log(setMovies);
// ;      } catch (error) {
//         console.error('Error fetching movie data:', error);
//       }
//     };
  
//     fetchData();
//   }, []);
  
//   return (
//     <Container>
//       <h4>Recommended for You</h4>
//       <Content>
//         {movies.map((movie) => (
//           <a href = {movie.video} ><Wrap key={movie.id}>
//             <img
//               src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
//               alt={movie.title}
//             />
//           </Wrap></a>
//         ))}
//       </Content>
//     </Container>
//   );
// }

// export default Movies;
// const Container = styled.div`

//  `

//  const Content = styled.div`

//      display: grid;
//      grid-gap: 25px;
//      grid-template-columns: repeat(5, minmax(0,1fr));
//  `

//  const Wrap = styled.div`
//  height:90%;
//      border-radius: 10px;
//      cursor: pointer;
//      overflow: hidden;
//      border: 3px solid rgba(249, 249, 249, 0.1);
//      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
//      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
//      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

//      img {
//          width: 100%;
//          height: 100%;
//          object-fit: cover;
//      }

//      &:hover {
//          transform: scale(1.05);
//          box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
//          rgb(0 0 0 / 72%) 0px 30px 22px -10px;
//          border-color: rgba(249, 249, 249, 0.8);
//      }

//  `
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = '29f3e355d7ab8ff8646dbd0dd663a239';
    const apiEndpoint = 'https://api.themoviedb.org/3/movie/popular';

    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiEndpoint}?api_key=${apiKey}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  const getVideo = async (movieId) => {
    try {
      const apiKey = '29f3e355d7ab8ff8646dbd0dd663a239';
      const videoEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
      const response = await axios.get(`${videoEndpoint}?api_key=${apiKey}`);
      return response.data.results[0]?.key; // Get the first video key, if available
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  const handlePosterClick = async (movieId) => {
    const videoKey = await getVideo(movieId);
    if (videoKey) {
      window.open(`https://www.youtube.com/watch?v=${videoKey}`, '_blank');
    } else {
      console.error('No video available for this movie.');
    }
  };

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies.map((movie) => (
          <Wrap key={movie.id} onClick={() => handlePosterClick(movie.id)}>
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
            />
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  /* Your styling for Container */
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  height: 90%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

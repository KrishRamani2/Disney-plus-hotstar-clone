import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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

function TVShows() {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const apiKey = '29f3e355d7ab8ff8646dbd0dd663a239';
    const apiEndpoint = 'https://api.themoviedb.org/3/tv/popular';

    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiEndpoint}?api_key=${apiKey}`);
        setTVShows(response.data.results);
      } catch (error) {
        console.error('Error fetching TV show data:', error);
      }
    };

    fetchData();
  }, []);

  const getVideo = async (tvShowId) => {
    try {
      const apiKey = '29f3e355d7ab8ff8646dbd0dd663a239';
      const videoEndpoint = `https://api.themoviedb.org/3/tv/${tvShowId}/videos`;
      const response = await axios.get(`${videoEndpoint}?api_key=${apiKey}`);
      return response.data.results[0]?.key; // Get the first video key, if available
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  const handlePosterClick = (tvShowName) => {
    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      `${tvShowName} trailer`
    )}`;
  
    // Open the YouTube search URL in a new tab
    window.open(youtubeUrl, '_blank');
  };
  

  return (
    <Container>
      <h4>Popular TV Shows</h4>
      <Content>
        {tvShows.map((show) => (
          <Wrap key={show.id} onClick={() => handlePosterClick(show.id)}>
            <img
              src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
              alt={show.name}
            />
            <p style={{ marginTop: '8px' }}>{show.name}</p>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default TVShows;

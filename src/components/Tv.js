import React from 'react'
import styled from 'styled-components';
import Slider  from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TVShows from './TvC';
function Tv() {
  let settings = {
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay :true,
  }
  return(<>
  <Carousel {...settings}>
  <Wrap>
      <a href="https://www.hotstar.com/in/shows/mahabharat/435"><img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/3132/1383132-i-011cefc50da9" alt=""/></a>
    </Wrap>
    <Wrap>
     <a href="https://www.hotstar.com/in/shows/commando/1260146757/watch?action=ctaNavigation&filters=content_type%3Depisode"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/9167/1569167-i-ea6463d522e0" alt=""/></a>
    </Wrap>
    <Wrap>
      <a href="https://www.hotstar.com/in/shows/aakhri-sach/1260147613?filters=content_type%3Dshow_clips"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/4479/1604479-i-c03c2aa23119" alt=""/></a>
    </Wrap>
    <Wrap>
      <a href="https://www.hotstar.com/in/shows/yeh-hai-mohabbatein/3?filters=content_type%3Dshow_clips"><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/7151/1417151-i-f8c57dbdd2b2" alt=""/></a>
    </Wrap>
    <Wrap>
     <a href="https://www.hotstar.com/in/shows/koffee-with-karan/1525?filters=content_type%3Dshow_clips"> <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/3759/1623759-i-96e8a0016d2d" alt=""/></a>
    </Wrap>
  </Carousel>
  <TVShows />
  </>);
}

export default Tv;

const Carousel = styled(Slider)`
margin-top: 20px;

ul li button {
  &:before{
    font-size:10px;
    color:rgba(150,158,171)
  }
}
li.slick-active button::before {
  color:white;
}
.slick-list {
  overflow:hidden;
}
button {
  z-index:1;
}
`
const Wrap = styled.div`
cursor:pointer;
img {
  border-radius: 4px solid transparent;
  width:100%;
  height:100%;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  transition-duration:300ms;
}

&:hover {
  border:4px solid rgba(249, 245 , 249, 0.9);
}
`
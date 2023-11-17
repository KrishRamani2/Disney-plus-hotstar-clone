import React from 'react'
import styled from 'styled-components';
import Slider  from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
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
      <a href="https://www.youtube.com/watch?v=TcMBFSGVi1c"><img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/4469/674469-h" /></a>
    </Wrap>
    <Wrap>
      <a href="https://www.youtube.com/watch?v=hCxeBWLFYDA"><img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1604/1621604-h-a34480ee6785" /></a>
    </Wrap>
    <Wrap>
      <a href="https://www.youtube.com/watch?v=ZuaseSovWDY"><img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5551/675551-h" /></a>
    </Wrap>
    <Wrap>
      <a href="https://www.youtube.com/watch?v=6L6XqWoS8tw"><img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h" /></a>
    </Wrap>
    <Wrap>
     <a href="https://www.hotstar.com/in/clips/marvels-the-avengers-trailer/1260022956/watch?filters=content_type%3Dclip"> <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/48/1370048-i-7fd17e1f03d6" /></a>
    </Wrap>
  </Carousel>
  </>);
}

export default ImgSlider;

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
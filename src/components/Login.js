import React from 'react';
import styled, { keyframes } from 'styled-components';
import img from '../images/login-background.jpg';
import img2 from '../images/cta-logo-one.svg';
import img3 from '../images/cta-logo-two.png';

function Login() {

  return (
    <Container>
      <BackgroundImage />
      <CTA>
        <CTALogoOne>
          <img src={img2} alt="CTA Logo" />
        </CTALogoOne>

        <ButtonsContainer>
          <SignUp><a href="/signups">SignUp</a></SignUp>
         <LoginP> <a href="/logins">Login</a></LoginP>
        </ButtonsContainer>
        <Description>
         By clicking on the above button you have agreed to all our terms and conditions TC*
        </Description>
        <CTALogoTwo>
          <img src={img3} alt="CTA Logo" />
        </CTALogoTwo>
      </CTA>
    </Container>
  );
}

export default Login;

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  color: white;
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${img});
  background-size: cover;
  z-index: -1;
  animation: ${slide} 20s linear infinite; /* Adjust the duration as needed */
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.div``;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const SignUp = styled.div`
  width: 48%; /* Adjust the width as needed */
  background-color: #0063e5;
  font-weight: bold;
  
  padding: 17px 0;
  cursor: pointer;
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  margin-top:8px;
  margin-bottom:3px;
  &:hover {
    background: transparent;
    border: 3px solid white;
  }
  a {
    text-decoration:none;
    color:#fff;
  }
`;

const LoginP = styled(SignUp)`
background-color: #0063e5;
&:hover {
  background: transparent;
  border: 3px solid white;
}
`;
const Description = styled.div`
color:white;
font-size:12px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;
`;

const CTALogoTwo = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 16px;
`;
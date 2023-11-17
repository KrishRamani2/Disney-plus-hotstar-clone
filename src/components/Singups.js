

import React from 'react';
import styled from 'styled-components';

const Signups = () => {

  return (
    <Container>
      <Form method="POST">
        <Title>Sign Up</Title>
        <InputLabel>Name</InputLabel>
        <Input type="text" placeholder="Enter your name" />
        <InputLabel>Email</InputLabel>
        <Input type="email" placeholder="Enter your email" />
        <InputLabel>Password</InputLabel>
        <Input type="password" placeholder="Enter your password" />
        <SignUpButton onClick={postData}>Sign Up</SignUpButton>
        <Terms>
          By clicking Sign Up, you agree to our Terms, Data Policy, and Cookies Policy.
        </Terms>
      </Form>
    </Container>
  );
};

export default Signups;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  background:transparent;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #fff;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #dddddd;
  border-radius: 14px;
  box-sizing: border-box;

`;

const SignUpButton = styled.button`
  background-color: #0063e5;
  color: #ffffff;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #004fad;
  }
`;

const Terms = styled.p`
  font-size: 12px;
  color: #888888;
  margin-top: 16px;
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40%;

  @media (min-width: 768px) {
    margin-top: 10%;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const Title = styled.h1`
  text-align: center;
  color: var(--pink-primary);
  font-size: 20px;
  margin-bottom: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const LoginForm = styled.form`
  color: var(--grey-0);
  background-color: #212529;
  min-width: 320px;
  font-size: 14px;
  padding: 34px 18px;
  border-radius: 4px;
  margin-inline: 12px;

  h2 {
    color: var(--grey-0);
    text-align: center;
  }

  div {
    width: 100%;
    background-color: yellow;
  }

  .still {
    text-align: center;
    margin-bottom: 18px;
    color: var(--grey-01);
    font-size: 12px;
  }

  button {
    width: 100%;
    margin-bottom: 34px;
    padding-block: 10px;
    border-radius: 4px;
    border: none;
    text-decoration: none;
  }

  .registerButton {
    width: 100%;
    padding-block: 10px;
    border-radius: 4px;
    border: none;
    text-decoration: none;
    text-align: center;
    margin-bottom: 0px;
  }

  .errorMessage {
    font-size: 12px;
    color: var(--negative-toastify);
    margin: 10px 0 20px 0;
    color: var(--negative-toastify);
  }

  .inputEmail,
  .inputPass {
    display: block;
    margin: 0 auto;
    text-align: left;
    width: 100%;
    padding-block: 8px;
    background-color: var(--grey-1);
    color: var(--grey-01);
    border-radius: 4px;
    padding-inline: 4px;
    outline: none;
    border: 1px solid var(--grey-01);
  }

  .inputEmail::placeholder,
  .inputPass::placeholder {
    color: var(--grey-01);
  }

  .Email,
  .Pass {
    text-align: left;
    display: block;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 6px;
  }

  .loginButton {
    background-color: var(--pink-primary);
    color: var(--grey-01);
    cursor: pointer;
  }

  .loginButton:hover,
  .registerButton:hover {
    filter: brightness(1.4);
    transition: 0.4s;
  }

  .registerButton {
    background-color: var(--grey-1);
    color: var(--grey-01);
    text-decoration: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    min-width: 26.875rem;
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: var(--grey-0);
`;

export const ModalStyled = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--grey-0);
  padding: 0;
  outline: none;
  background-color: #212529;
  margin: 50% auto;
  margin-inline: 14px;

  .headerModal {
    display: flex;
    justify-content: space-between;
    border-radius: 4px 4px 0px 0px;
    background: var(--grey-2);
    padding: 22px 14px;
  }

  .headerModal span {
    cursor: pointer;
  }

  .contentModal {
    padding: 22px 14px;
  }

  .contentModal button {
    width: 100%;
    margin-top: 20px;
    background: var(--pink-primary);
    color: var(--grey-0);
    padding: 12px 80px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }

  .contentModal label {
    font-size: 12px;
  }

  .headerModal h1 {
    font-weight: 700;
    font-size: 14px;
  }

  input,
  select {
    display: block;
    width: 100%;
    margin-block: 8px;
    padding: 12px 4px;
    background-color: var(--grey-2);
    border-radius: 4px;
    font-size: 18px;
    border: none;
    color: var(--grey-01);
  }

  input::placeholder,
  select {
    color: var(--grey-0);
  }

  @media (min-width: 768px) {
    width: 25rem;
    margin: 15% auto;
  }
`;

export const StyleSection = styled.section`
  width: 100%;
  border-bottom: 1px solid var(--grey-2);
  padding: 60px 6px 60px 6px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 960px;
    padding: 30px 36px 30px 36px;
    margin: 0 auto;
    color: var(--grey-0);
  }
  .h2 {
    margin-bottom: 12px;
    color: ;
  }

  .span {
    color: var(--grey-1);
  }

  @media (min-width: 768px) {
    div {
      flex-direction: row;
    }
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--grey-2);
  padding: 60px 6px 60px 6px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 12px;
    max-width: 900px;
    margin: 0 auto;
  }

  h2 {
    color: var(--pink-primary);
  }

  button {
    background-color: #212529;
    color: var(--grey-01);
    padding: 16px 34px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .logoutButton:hover {
    filter: brightness(1.4);
    transition: 0.4s;
  }

  @media (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 60px 0 60px 0;
  }

  @media (max-width: 350px) {
    padding: 60px 6px 60px 6px;
  }
`;

export const StyledError = styled.div`
  width: 100%;
  padding: 60px 6px 60px 6px;

  header {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    max-width: 960px;
    padding: 30px 36px 30px 36px;
    margin: 0 auto;
    color: var(--grey-2);
  }

  .addIcon {
    cursor: pointer;
    color: var(--grey-0);
  }

  .addIcon:hover {
    filter: brightness(1.4);
    transition: 0.4s;
  }
`;

export const StyledUl = styled.ul`
  background-color: var(--grey-3);
  padding-block: 8px;
  max-width: 960px;
  margin: 0 auto;
  min-height: 260px;
`;

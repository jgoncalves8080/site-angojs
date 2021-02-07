import styled, { css } from 'styled-components';
import { Container as Cont } from '../../styles/globalStyle';

const iconCSS = css`
  fill: #fff;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 2.5rem;
  color: #1c2237;
`;

export const Container = styled.div`
  padding-top: 20px;
  width: 100%;
  max-width: 1380px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  /* flex-wrap: wrap; */
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  padding: 10px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CardTiTle = styled.h2`
  text-align: justify;
`;

export const CardImg = styled.img`
  width: 150px;
  height: 150px;
  display: flex;
  /* ${iconCSS} */
`;

export const CardBody = styled.p`
  margin-top: 10px;
  text-align: justify;
`;

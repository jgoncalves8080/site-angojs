import styled from 'styled-components';
import { Container as Cont } from '../../styles/globalStyle';

export const Container = styled(Cont)`
  padding-top: 50px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  min-height: 100%;
  border: 2px solid #ccc;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 50%;
`;

export const CardContainer = styled.div`
  padding: 20px;
`;

export const CardFooter = styled.div``;

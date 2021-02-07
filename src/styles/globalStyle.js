import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    outline:0;
    padding:0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html, #root, body{
    height: 100%;
  } 

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  /* color: #222533; */
  background: ${({ primary }) => (primary ? '#ffb86c' : '#222533')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#f8c997' : '#595e79')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

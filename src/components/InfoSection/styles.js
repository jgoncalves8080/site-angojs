import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
  flex-wrap: wrap;
  margin: 0 -15px -15px -15px;
`;

export const InfoColumn = styled.div`
  flex: 1;
  flex-basis: 50%;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-basis: 100%;
    max-width: 100%;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  text-align: justify;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const TextLink = styled.a`
  text-decoration: none;
  color: ${({ primary }) => (primary ? '#222533' : '#fff')};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  max-width: 555px;
`;

export const Image = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

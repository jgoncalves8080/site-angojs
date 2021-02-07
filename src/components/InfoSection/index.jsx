import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { Container, Button } from '../../styles/globalStyle';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImageWrapper,
  Image,
  TextLink,
} from './styles';
import '../../styles/auxStyle.css';

function InfoSection({
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
  lightText,
  bgImage,
  headLine,
  lightTextDesc,
  description,
  primary,
  btnLabel,
  start,
  img,
  alt,
  lottie,
  animationData,
  btnLink,
}) {
  const [isStopped] = useState(false);
  const [isPaused] = useState(false);

  const bg = bgImage && 'bg-image';

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <InfoSec lightBg={lightBg} className={bg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>

                <Button big fontBig primary={primary}>
                  <TextLink href={btnLink} target="blank" primary={primary}>
                    {btnLabel}
                  </TextLink>
                </Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImageWrapper start={start}>
                {lottie ? (
                  <>
                    <Lottie
                      options={defaultOptions}
                      height={400}
                      width={400}
                      isStopped={isStopped}
                      isPaused={isPaused}
                    />
                  </>
                ) : (
                  <Image src={img} alt={alt} />
                )}
              </ImageWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;

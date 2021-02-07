import React from 'react';

import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { Button } from '../../styles/globalStyle';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItemns,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapp,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ImageLogo,
} from './styles';
import {
  FooterLinkData1,
  FooterLinkData2,
  FooterLinkData3,
  FooterLinkData4,
} from './DataLinksFooter';

import logo from '../../images/logo.png';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Inscreva-se na nossa Newsletter para estar ligado à tudo que se passa
          na AngoJs
        </FooterSubHeading>
        <FooterSubText>
          Você pode se inscrever a qualquer momento.
        </FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your email" />
          <Button fontBig primary>
            Subscrever
          </Button>
        </Form>
      </FooterSubscription>

      <SocialMedia>
        <SocialMediaWrapp>
          <SocialLogo to="/">
            <ImageLogo src={logo} alt="" />
          </SocialLogo>
          {/* <WebsiteRights>AngoJS @ 2021</WebsiteRights> */}
          <SocialIcons>
            <SocialIconLink
              href="https://web.facebook.com/groups/angojs"
              target="_blank"
              aria-label="Facebbok"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.youtube.com/channel/UCT86w0RE5w8AosU9mk2my5g"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com/angojs"
              target="_blank"
              aria-label="Twiter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/company/71216219/admin/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapp>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;

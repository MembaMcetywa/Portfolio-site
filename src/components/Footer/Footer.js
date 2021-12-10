import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel: 081-376-3882">081-376-3882</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto: membatheone@gmail.com">membatheone@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Passion is what led us here</Slogan>
        </CompanyContainer>
        <SocialContainer>     
        <SocialIcons href="https://github.com/MembaMcetywa">
      <AiFillGithub size="3rem"/>
   </SocialIcons>
   <SocialIcons href="https://twitter.com/@membatheone">
      <AiFillTwitterCircle size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://linkedin.com/in/membathisi-mcetywa-2b8b42189">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

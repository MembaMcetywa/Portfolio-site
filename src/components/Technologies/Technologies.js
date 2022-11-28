import React from 'react';
import { DiDart, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SiFlutter} from 'react-icons/si';
import { FiFigma} from 'react-icons/fi';


const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with different languages and frameworks. From Front-end to Back-end. My utilization of a technology will usually depend on the urgency and specific need.
    </SectionText>
    <List>
      <ListItem>
       <SiFlutter size="2.0em"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/> 
            Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
       <DiFirebase size="3em"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/> 
            Java and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
       <FiFigma size="2.0em"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/> 
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;

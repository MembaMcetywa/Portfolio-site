import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello, I'm Memba <br/>
      Welcome to my Portfolio.
    </SectionTitle>
    <SectionText>
      I am a software developer, designer and all round technology enthusiast.
      I'd like to join the SovTech team for the chance to develop cutting edge technology.
      As well as grow as developer being surrounded by world class developers. 
    </SectionText>
    <Button onClick= {()=> console.log("I want to solve for the wireless transmission of electricity one day.")}>Learn More</Button>
  </LeftSection>

</Section>
);

export default Hero;
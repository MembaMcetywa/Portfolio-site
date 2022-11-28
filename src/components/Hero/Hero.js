import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Memba <br />
      </SectionTitle>
      <SectionText>
        I am a junior full stack software developer. passionate about
        technology, engineering & people. My primary goal is to apply my
        technical expertise all throughout the full software life cycle to
        ensure production and delivery of products and services that meet the
        required specifications. And my experience as a junior software
        developer has directly contributed to the achievement of this goal by
        enhancing my abilities in designing, implementing, testing, and
        upgrading software
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;

import styled from 'styled-components';
import CustomLink from '../common/CustomLink';
import { METADATA } from '@config/index';
import { GithubLogo, LinkedInLogo, TwitterLogo } from 'public/logos';

const SocialMediaLogos = () => {
  const { github, twitter, linkedinLink } = METADATA;

  const githubLink = `https://github.com/${github}`;
  const twitterLink = `https://twitter.com/${twitter}`;

  return (
    <StyledLogos>
      <CustomLink aria-label="github" href={githubLink}>
        <GithubLogo />
      </CustomLink>
      <CustomLink aria-label="twitter" href={twitterLink}>
        <TwitterLogo />
      </CustomLink>
      <CustomLink aria-label="linkedin" href={linkedinLink}>
        <LinkedInLogo />
      </CustomLink>
    </StyledLogos>
  );
};

export default SocialMediaLogos;

const StyledLogos = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 3px;
  margin-bottom: var(--xl);
`;

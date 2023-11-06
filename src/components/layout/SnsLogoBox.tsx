import styled from 'styled-components';
import { METADATA } from '#src/config';
import { GithubLogo, LinkedInLogo, TwitterLogo } from 'public/logos';
import Link from 'next/link';

const SnsLogoBox = () => {
  const { github, twitter, linkedinLink } = METADATA;

  const githubLink = `https://github.com/${github}`;
  const twitterLink = `https://twitter.com/${twitter}`;

  return (
    <LogoBox>
      <Link aria-label="github" href={githubLink}>
        <GithubLogo />
      </Link>
      <Link aria-label="twitter" href={twitterLink}>
        <TwitterLogo />
      </Link>
      <Link aria-label="linkedin" href={linkedinLink}>
        <LinkedInLogo />
      </Link>
    </LogoBox>
  );
};

export default SnsLogoBox;

const LogoBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 3px;
  margin-bottom: var(--xl);
`;

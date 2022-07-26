import CustomLink from '#components/common/CustomLink';
import SocialMediaLogos from '#components/layout/SocialMediaLogos';
import { METADATA } from '#src/config/index';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <SocialMediaLogos />
      <Mail href={`mailto:${METADATA.email}`}>Email: {METADATA.email}</Mail>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: var(--10xl) 0 var(--xl);
  text-align: center;
  margin: var(--xl) auto;
  border-top: 1px solid var(--theme1-color);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin: var(--md) auto;
  }
`;

const Mail = styled(CustomLink)`
  &:hover {
    font-weight: bold;
  }
`;

import CustomLink from '#components/common/CustomLink';
import SnsLogoBox from '#components/layout/SnsLogoBox';
import { METADATA } from '#src/config';
import styled from 'styled-components';

const S: any = {};
const Footer = () => {
  return (
    <S.Footer>
      <SnsLogoBox />
      <S.Mail href={`mailto:${METADATA.email}`}>Email: {METADATA.email}</S.Mail>
    </S.Footer>
  );
};

export default Footer;

S.Footer = styled.footer`
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

S.MailLink = styled(CustomLink)`
  &:hover {
    font-weight: bold;
  }
`;

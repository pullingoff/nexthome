import CustomLink from '../common/CustomLink';
import Image from 'next/image';
import logo from '@public/logo.svg';
import styled from 'styled-components';

const SpiderLogo = () => {
  return (
    <NavLogo>
      <CustomLink href="/">
        <Image alt="spider" width="45px" src={logo} />
      </CustomLink>
    </NavLogo>
  );
};

export default SpiderLogo;

const NavLogo = styled.div`
  display: inline;
  width: 4rem;
  margin: 1rem;
  &:hover {
    & span img {
      transform: rotate(360deg);
      transition: transform 0.25s ease-in-out;
    }
  }
`;

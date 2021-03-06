import { useState } from 'react';
import mainImg from '#public/images/main.JPG';
import CustomLink from '../common/CustomLink';
import styled from 'styled-components';
import Image from 'next/image';

const Main = () => {
  const [isHover, setHover] = useState(false);

  return (
    <StyledMain>
      <CustomLink
        href="/about"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {' '}
        <ImgContainer>
          <StyledImg alt="박하은의 이력서 보러가기" src={mainImg} priority />
        </ImgContainer>
      </CustomLink>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.section`
  margin-top: var(--lg);
`;

const ImgContainer = styled.section`
  position: relative;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
  }
`;

const HoverZoomImage = styled(Image)`
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledImg = styled(HoverZoomImage)`
  cursor: pointer;
  -webkit-filter: brightness(100%);
  &:hover {
    -webkit-filter: brightness(50%);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
`;

import mainImg from '#public/images/main.JPG';
import CustomLink from '../common/CustomLink';
import styled from 'styled-components';
import Image from 'next/image';
const Main = () => {
  return (
    <StyledMain>
      <CustomLink href="/about">
        {' '}
        <ImgContainer>
          <HoverZoomImage
            alt="박하은의 이력서 보러가기"
            src={mainImg}
            priority
          />
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
`;

const HoverZoomImage = styled(Image)`
  transition: transform 0.5s ease;
  cursor: pointer;
  -webkit-filter: brightness(100%);

  &:hover {
    transform: scale(1.1);
    -webkit-filter: brightness(50%);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
`;

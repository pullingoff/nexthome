import styled from 'styled-components';
import Image from 'next/image';

const CenteredImg = ({ src, alt }: { src: string; alt: string }) => {
  if (!alt) alt = 'Thumbnail Image';

  return (
    <ThumbnailContainer>
      <InnerContainer>
        <Image src={src} alt="thumbnail" layout="fill" objectFit="contain" />
      </InnerContainer>
    </ThumbnailContainer>
  );
};

export default CenteredImg;

const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: lightgray;
    transition: 0.3s ease;
  }
`;

const InnerContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
`;

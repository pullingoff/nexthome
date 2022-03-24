import styled from 'styled-components';
import Image from 'next/image';

const CenteredImg = ({ src, alt }) => {

  if (!alt) alt = 'Thumbnail Image';

  return (
    <ThumbnailWrapper>
      <InnerWrapper>
        <Image src={src} alt="thumbnail" layout='fill' objectFit='contain'/>
      </InnerWrapper>
    </ThumbnailWrapper>
  );
};

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  &::after {
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

export const InnerWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
`;

export default CenteredImg;
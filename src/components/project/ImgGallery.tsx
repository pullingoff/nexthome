import styled from 'styled-components';
import Image from 'next/image';
import path from 'path';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ImgGallery = ({ imgList }: { imgList: string[] }) => {
  const imgDir = path.join('images', 'pjDetail');
  return (
    <Container>
      {imgList?.map((img, idx) => (
        <ImgItem key={idx}>
          <Zoom
            zoomMargin={1}
            wrapStyle={{
              minWidth: '100%',
              minHeight: '100%',
              height: '200px',
            }}
          >
            <StyledThumb
              // priority
              layout="fill"
              objectFit="contain"
              className="img"
              src={`/${path.join(imgDir, img)}`}
              alt={`${idx} 사진`}
            />
          </Zoom>
        </ImgItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: block;
  overflow: visible;
  margin: 10px 0;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    overflow: initial;
    margin: 10px 5vw;
  }
`;
const StyledThumb = styled(Image)`
  position: relative;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const ImgItem = styled.section`
  position: relative;
  width: 100%;
  min-height: 200px;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
  }
`;
export default ImgGallery;

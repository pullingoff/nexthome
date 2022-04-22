import styled from "styled-components"
import Image from "next/image"
import path from 'path'

const ImgGallery = ({imgList} : {
    imgList : string[]
}) => {
    const imgCnt = imgList.length;
    const imgDir = path.join('images', 'pjDetail')
    return (
        <BlockContainer>
            {imgList && imgList.map((img, idx) => (
                <ImgItem key={idx}>
                    <StyledThumb priority
                            layout="fill"
                            objectFit="contain"
                            src={`/${path.join(imgDir, img)}`}
                            alt={`${idx} 사진`}/>
                </ImgItem>
            ))}
        </BlockContainer>
    )
}

const FlexContainer = styled.div`
display: flex;
width: 140%;
overflow-x: scroll;
flex-direction: row;
justify-content: space-around;
position: relative;
left: -30px;
margin-bottom: 20px;
`

const BlockContainer = styled.div`
display: block;
overflow: visible;
margin-bottom: 20px; 
@media (min-width: ${({theme}) => theme.device.sm}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    overflow: initial;
    margin: 0 10vw 40px;
}
`
const StyledThumb = styled(Image)`
    position: relative;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.2);
    }
`

const ImgItem = styled.section`
position: relative;
width: 100%;
min-height: 200px;
`
export default ImgGallery
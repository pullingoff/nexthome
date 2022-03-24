import styled, {css} from 'styled-components';
import CustomLink from './CustomLink';
import Tag from "./Tag";

const RandomColorDiv = styled.div`
height: 30px;
`

const PostCard = ({ href, title, desc, date, korDate, tag }) => {
  

  return (
    <Wrapper>
      <CustomLink href={href}>
       
        <StyledText>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <StyledDateTime dateTime={date}>{korDate}</StyledDateTime>
        </StyledText>
      </CustomLink>
      <TagWrapper>
        {tag != null && tag.map((t) => (
          <Tag key={t} text={t} />
        ))}
        </TagWrapper>
      {/* Tag 4개 이상이면 안 보이도록 조치 필요 */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  border-radius: 8px;
  background-color: white;
  border: 1px solid var(--theme2-color);

  /* Fix Safari overflow:hidden with border radius not working error */
  z-index: 0;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  // flex: 1 1 auto;
  // justify-content: space-between;
  padding: var(--2xl);
  padding-bottom: 10px;
  &:hover h1 {
    color: var(--hover-color);
  }
  & > * {
    display: block;
  }
`;

const Title = styled.h1`
  margin-top: 3px;
  font-weight: 700;
  line-height: 1.3;
`;

const Desc = styled.p`
  line-height: 1.5;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;    // 줄 수 제한
  -webkit-box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledDateTime = styled.p`
  margin: 10px 0;
`;


const TagWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 auto var(--2xl) var(--2xl);
`

export default PostCard;
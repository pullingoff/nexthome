import styled from 'styled-components';
import CustomLink from '../CustomLink';
import Tag from "../Tag";
import { IDateTime, IPost } from '../../types';

const PostCard = ({ href, korDate, post}: {
  href: string,
  korDate: string,
  post: IPost
}) => {
  const {title, description, date, tags} = post.frontmatter
  return (
    <CardContainer>
      <CustomLink href={href}>
       
        <StyledText>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
            <StyledDateTime dateTime={date}>{korDate}</StyledDateTime>
        </StyledText>
      </CustomLink>
      <TagContainer>
        {tags != null && tags.map((t) => (
          <Tag key={t} text={t} />
        ))}
        </TagContainer>
      {/* Tag 4개 이상이면 안 보이도록 조치 필요 */}
    </CardContainer>
  );
};

const CardContainer = styled.div`
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
  &:hover {
    transform: translateY(-15px);
    box-shadow: 10px 10px var(--color-point-pink);
    transition: box-shadow 300ms ease 0.1s, transform 300ms ease 0.1s
  }
}
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--2xl);
  padding-bottom: 10px;

  & > * {
    display: block;
  }
`;

const Title = styled.h2`
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

const StyledDateTime = styled.p<IDateTime>`
  margin: 10px 0;
`;


const TagContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 auto var(--2xl) var(--2xl);
`

export default PostCard;
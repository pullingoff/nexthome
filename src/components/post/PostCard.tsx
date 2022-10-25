import styled from "styled-components";
import CustomLink from "../common/CustomLink";
import { IPost } from "#type/post";
import { useEffect, useState } from "react";
import format from "date-fns/format";

const PostCard = ({ href, post }: { href: string; post: IPost }) => {
  const [publishedAt, setPublishedAt] = useState<string>("");
  const { title, description, tags } = post.frontmatter;

  // 사파리용 split 서버, 클라이언트 다른 경우가 있음
  useEffect(() => {
    try {
      setPublishedAt(
        format(new Date(post.frontmatter.date), "yyyy년 MM월 dd일")
      );
    } catch (e) {
      setPublishedAt(post.frontmatter.date.toString().split(/(\s+)/)[0]);
    }
  }, [post.frontmatter.date]);

  return (
    <CardContainer>
      <CustomLink href={href}>
        <InfoSection>
          <h3>{title}</h3>
          <Desc>{description}</Desc>
          <StyledDateTime>{publishedAt}</StyledDateTime>
        </InfoSection>
      </CustomLink>
      <StyledTagContainer>
        {tags?.map((t: string) => (
          <Tag key={t} text={t} />
        ))}
      </StyledTagContainer>
      {/* Tag 4개 이상이면 안 보이도록 조치 필요 */}
    </CardContainer>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <StyledTag href={`/tags/${text}/1`}>{text.split(" ").join("-")}</StyledTag>
  );
};

export const StyledTag = styled(CustomLink)`
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.125rem 0.75rem;
  background-color: var(--theme1-color);
  border-radius: var(--border-radius-sm);
  margin: 0 var(--md) var(--md) 0;
  &:hover {
    color: var(--theme1-color);
    background-color: initial;
    box-shadow: 0 0 0 2px var(--theme1-color) inset;
  }
`;

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
    transform: translateY(-10px);
    box-shadow: 10px 10px lightgray;
    transition: box-shadow 0.2s ease 0.1s, transform 0.2s ease 0.1s
  }
}
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: var(--3xl);
  padding-bottom: 10px;

  & > * {
    display: block;
  }
  h3 {
    margin-top: 3px;
    font-weight: 700;
    line-height: 1.3;
  }
`;

const Desc = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 6px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 줄 수 제한
  -webkit-box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledDateTime = styled.p`
  font-size: 0.8rem;
  margin: 10px 0;
`;

const StyledTagContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto var(--xl) var(--2xl);
`;

export default PostCard;

import CustomLink from '../common/CustomLink';
import styled from 'styled-components';
import { IHeading } from '#type/post';

const PostHeadings = ({headings}: {headings:IHeading[]}) => {

  return (
      <>
      {headings ? (
        <HeadingContainer>
          <HeadingOl>
            {headings.map(heading => (
              <HeadingLi key={heading.text}>
                <CustomLink href={heading.link}>{heading.text}</CustomLink>
              </HeadingLi>
            ))}
          </HeadingOl>
        </HeadingContainer>
        ) : null}
      </>
  );
};

export default PostHeadings;

const HeadingContainer = styled.aside`
  @media (max-width: ${({ theme }) => theme.device.md}) {
    display: none;
  }
  min-width: 10%;
  position: sticky;
  top: 70px;
  order: 1;
  overflow-y: scroll;  
  max-height: 90vh;
`;
const HeadingOl = styled.ul`
list-style: none;
font-size: 0.9rem;
color: #2c3c55d1;
border-left: 1px solid #2c3c55d1;
padding-left: 1rem;
`;

const HeadingLi = styled.li`
  list-style: none;
  margin-bottom: 2px;
  
  &:hover {
  }
`;

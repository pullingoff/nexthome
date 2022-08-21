import CustomLink from '../common/CustomLink';
import styled from 'styled-components';
import { IHeading } from '#type/post';

const PostHeadings = ({ headings }: { headings: IHeading[] }) => {
  return (
    <>
      {headings ? (
        <HeadingContainer>
          <ul>
            {headings.map(heading => (
              <li key={heading.text}>
                <CustomLink href={heading.link}>{heading.text}</CustomLink>
              </li>
            ))}
          </ul>
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
  min-width: 15%;
  position: sticky;
  top: 70px;
  order: 1;
  overflow-y: scroll;
  max-height: 90vh;

  ul {
    list-style: none;
    font-size: 0.9rem;
    color: #1e293bd1;
    border-left: 1px solid #1e293bd1;
    padding-left: 1rem;

    li {
      list-style: none;
      margin-bottom: 2px;
      &:hover {
        font-weight: bold;
      }
    }
  }
`;

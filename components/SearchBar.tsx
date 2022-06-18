import styled from 'styled-components';
// import SearchBarLogo from "./SearchBarLogo"

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledInput placeholder="무엇을 찾고 계십니까!? 🧞‍♂️" />
      <SearchBarLogo />
    </StyledSearchBar>
  );
};

const SearchBarLogo = () => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="salmon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  line-height: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  top: var(--md);
  right: var(--md);
  position: absolute;
`;

const StyledSearchBar = styled.div`
  position: relative;
  height: 3rem;
  align-items: center;
  margin-top: var(--lg);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  color: salmon;
  border-radius: var(--md);
  border-width: 1px;
  border-color: salmon;
  padding: var(--md) var(--lg);
  line-height: 1.5rem;
`;

export default SearchBar;

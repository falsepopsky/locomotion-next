import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

interface LinkStyled extends LinkProps {
  content: string;
}

interface LinkProp {
  svg?: boolean;
}

const StyledLink = styled.a<LinkProp>`
  margin: ${({ svg }) => (svg ? '0' : '0 0.5em')};
  display: ${({ svg }) => svg && 'inline-flex'};
  max-width: max-content;
  font-size: 0.9rem;
  font-weight: 400;
  color: #fbfbfb;
  text-decoration: none;

  &:hover {
    opacity: ${({ svg }) => (svg ? '1' : '0.8')};
    text-decoration: none;
  }

  &:link,
  :visited,
  :active {
    text-decoration: none;
  }

  @media (prefers-color-scheme: light) {
    color: #262626;
  }
`;

const NavLink = ({ href, content }: LinkStyled) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{content}</StyledLink>
    </Link>
  );
};

export { NavLink, StyledLink };

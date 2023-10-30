import { useAppRoute } from '../../hooks/useAppRoute.ts';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  const { routes, isLoading } = useAppRoute();

  if (isLoading) {
    return null;
  }

  return (
    <HeaderWrapper>
      <Nav>
        <ul>
          {routes.map((route) => (
            <NavLink
              key={route.id}
              to={route.path}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? 600 : 400,
                };
              }}
            >
              {route.title}
            </NavLink>
          ))}
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;

  background-color: rgb(15 23 42);
  color: white;

  display: flex;
  justify-content: center;
  padding-block: 10px;
`;

const Nav = styled.nav`
  & > ul {
    display: flex;
    gap: 10px;
  }
`;

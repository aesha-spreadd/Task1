// navbarStyled.js
import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarTitle = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e26ee5;
  text-decoration: none;
  margin-right: 1rem;
`;

export const NavbarInputContainer = styled.div`
  position: relative;
`;

export const NavbarInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 1rem;
  padding-right: 30px; /* Space for the search icon */
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  color: #ccc;
  cursor: pointer;
`;

export const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const NavbarList = styled.li`
  margin-right: 2rem;
  position: relative;
`;

export const IconAfterLink = styled.span`
  position: absolute;
  top: 50%;
  left: 43px;
  transform: translateY(-50%);
`;

export const ButtonOutlinedSecondary = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid #e26ee5;
  border-radius: 5px;
  background-color: transparent;
  color: #e26ee5;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #e26ee5;
    color: #fff;
  }
`;

export const Badge = styled.div`
  position: relative;
  display: inline-block;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const NumberBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff3d00;
  color: #fff;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
`;

export const TextLink = styled.a`
  text-decoration: none;
  color: #e26ee5;
  font-weight: bold;
  transition: color 0.3s;
  cursor:pointer,
  &:hover {
    color: #ff3d00;
  }
`;

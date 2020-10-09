import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query'

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  color: black;
  display: inline-block;
  

  ${media.lessThan('medium')`
      width: 50%;
      margin: 3 auto; 
  `}
`;
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  display: inline-block;
  ${media.lessThan('medium')`
      width: 20%;
      margin-right: 20px;
  `}
`;
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
  display: inline-block;
  
  ${media.lessThan('medium')`
      width: 20%;
  `}
`;
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  display: inline-block;
  svg {
    margin-right: 20px;
  }
  ${media.lessThan('medium')`
      width: 10%;
      display: flex;
  `}  
`;
const MenuLink = styled.a`
  margin-right: 20px;
`;

const Header = ({title}) => {
    return (
    <Nav>
      <NavHeader>
        <NavLeft>{title}</NavLeft>
        <NavCenter>
          <Input type="text" placeholder="Search" />
        </NavCenter>
        <NavRight>
          <MenuLink href="#">
            Opa 1
          </MenuLink>
          <MenuLink href="#">
            Opa 2
          </MenuLink>
          <MenuLink href="#">
            Opa 3
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
    );
  }

  export default Header;
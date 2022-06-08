import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const StyledContainer = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftNav = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  margin-left: 2rem;
  padding: 5px; ;
`;
const Input = styled.input`
  border: none;
`;
const CenterNav = styled.section`
  flex: 1;
`;
const Logo = styled.h1`
    text-align:center;
  font-weight: bold;
  .logofocus {
    color: blue;
  }
`;
const RightNav = styled.section`
  flex: 1;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  margin-left: 1rem;
  padding:5px;
  
`;
const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
`;
const Navbar = () => {
  return (
    <StyledContainer>
      <Wrapper>
        <LeftNav>
          <Language> EN</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{color:"grey", fontSize:16}}/>
          </SearchContainer>
        </LeftNav>
        <CenterNav>
          <Logo>
            CodeGuru<span className="logofocus">Ozzy</span>
          </Logo>
        </CenterNav>
        <RightNav>
            <MenuItem>
                Register
            </MenuItem>
            <MenuItem>
                SignIn
            </MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon/>
      </Badge>
            </MenuItem>
        </RightNav>
      </Wrapper>
    </StyledContainer>
  );
};

export default Navbar;

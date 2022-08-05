import { Badge } from "@material-ui/core";
import {
  FavoriteBorderOutlined,
  PersonOutline,
  Search,
  ShoppingCartOutlined
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  padding-top: 0px;
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  display: flex;
  font-size: 20px;
`;

const Center = styled.div`
  text-align: center;
  display: flex;
  padding: 20px;
  object-fit: cover;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: red;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  :hover {
    color: red;
    transition: 0.2s;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>ARIES-SHOP</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "red", fontSize: 30 }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <FavoriteBorderOutlined />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Badge>
              <PersonOutline />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

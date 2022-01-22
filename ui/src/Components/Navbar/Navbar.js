import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import styled from "styled-components";
import "./Navbar.css";
import { mobile } from "../../Responsive";
import { tablet, tablet2 } from "../../Responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//  The Main Container  for the Home page
const Container = styled.div`
  height: 100px;
  ${tablet({ marginBottom: "6rem", padding: "none" })}
`;

const Wrapper = styled.div`
  font-size: 17px;
  font-weight: 500;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flexDirection: "column", margin: "1rem 0px" })}
  ${tablet({ flexDirection: "column", margin: "1rem 0px" })}
`;
// Left Container
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ order: 3, marginTop: "1rem" })}
  ${tablet({ order: 3, marginTop: "4rem" })}
`;
// Children of the left container
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${tablet({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid green;
  display: flex;
  align-item: center;
  margin-left: 25px;
  padding: 5px;
  ${tablet({ display: "none" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "100px" })}
`;

// Center Conatiner
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ order: 1 })}
  ${tablet({ order: 1 })}
`;

// Children of the center container

const Logo = styled.h1`
  font-size: 2.5rem;
  color: blue;
  text-transform: uppercase;
  ${mobile({ fontSize: "1rem" })}
  ${tablet({ fontSize: "2rem" })}
  ${tablet2({ fontSize: "2rem" })}
`;
const Logospan = styled.span`
  color: rgb(1, 255, 1);
  text-transform: uppercase;
  font-size: 3rem;
  ${mobile({ fontSize: "1.5rem" })}
  ${tablet({ fontSize: "3rem" })}
  ${tablet2({ fontSize: "3rem" })}
`;

// Right Container
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
  ${mobile({
    justifyContent: "space-evenly",
    flex: 2,
    width: "90%",
  })}
  ${tablet({
    justifyContent: "space-evenly",
    flex: 2,
    width: "90%",
  })}
  ${mobile({ order: 2, fontSize: "2rem" })}
  ${tablet({ order: 2, fontSize: "4rem" })}
`;

// Children of the Left container

const MenuItems = styled.div`
  cursor: pointer;
  margin-left: 2rem;
  font-size: 1.2rem;
  ${mobile({ fontSize: "1rem", marginLeft: "0.2rem" })}
  ${tablet({ fontSize: "2rem", marginLeft: "0.2rem" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  // console.log(user);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            Bony<Logospan>Store</Logospan>
          </Logo>
        </Center>
        <Right>
          <Link to="/cart">
            <MenuItems>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

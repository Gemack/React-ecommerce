import React from "react";
import styled from "styled-components";
import { mobile } from "../../Responsive";
import { tablet } from "../../Responsive";
import {
  Facebook,
  WhatsApp,
  LinkedIn,
  Instagram,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  background: gray;
  ${mobile({ flexDirection: "column", alignItems: "center" })}
  ${tablet({ flexDirection: "column", alignItems: "center" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 1.2rem;
`;

const Title = styled.h3`
  margin-bottom: 1.5rem;
  color: white;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
  font-size: 1.4rem;
  color: rgb(1, 255, 1);
`;

const Right = styled.div`
  flex: 1;
  padding: 1.2rem;
`;
const Logo = styled.h1`
  font-size: 1.5rem;
  color: blue;
  text-transform: uppercase;
`;
const Logospan = styled.span`
  color: rgb(1, 255, 1);
  text-transform: uppercase;
  font-size: 2rem;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: blue;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          Bony<Logospan>Store</Logospan>
        </Logo>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="25D366">
            <WhatsApp />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="0e76a8">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 77 Aba Road Port Hacourt
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +234791084109
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> BonyStore @gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;

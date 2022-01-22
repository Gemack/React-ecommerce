import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile, tablet } from "../../Responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  background: rgb(1, 255, 1);
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 200;
  color: white;
  ${mobile({ fontSize: "2rem" })}
  ${tablet({ fontSize: "2.5rem" })}
`;
const Desc = styled.div`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  ${mobile({ fontSize: "1rem" })}
  ${tablet({ fontSize: "1.5rem" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 3rem;
  background: white;
  display: flex;
  justify-content: space-between;
  border: solid blue 1px;
  ${mobile({ height: "2rem" })}
  ${tablet({ height: "2.5rem" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 5rem;
  font-size: 2rem;
  font-family: arial;
  ${mobile({ fontSize: "1rem", paddingLeft: "2.9rem" })}
  ${tablet({ fontSize: "1.5rem", paddingLeft: "3.9rem" })}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background: blue;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get Notification Of Our New & Trending Product</Desc>
      <InputContainer>
        <Input placeholder="Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

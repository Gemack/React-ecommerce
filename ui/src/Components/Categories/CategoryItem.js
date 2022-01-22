import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../Responsive";

const Container = styled.div`
  flex: 1;
  margin: 0.4rem;
  position: relative;
  transition: all 1s;
  &:hover {
    transform: scale(1.05);
    filter: grayscale();
  }
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  baclground: white;
  color: gray;
  cursor: pointer;
  transition: all 2s;

  &:hover {
    background: blue;
    border-radius: 15px;
    color: white;
  }
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button> SHOP NOW </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItems;

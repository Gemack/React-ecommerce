import { ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../Data/data";
import { mobile } from "../../Responsive";

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  background: blue;
  position: relative;
  overflow: hidden;

  ${mobile({ marginTop: "3rem", background: "black" })}
`;
const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: blue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "6px"};
  right: ${(props) => props.direction === "right" && "6px"};
  cursor: pointer;
  z-index: 100;
`;

const Wrapper = styled.div`
    height 100%;
    display:flex;
    transform:translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 2s;
    ${mobile({ height: "50%" })}

`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin-top: 2rem;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  z-index: -1;
  ${mobile({ flex: 2 })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  color: white;
  background: black;
  ${mobile({ padding: "60px", background: "rgba(0, 0, 0, 0.115)" })}
`;
const Title = styled.h1`
  font-size: 3rem;
  ${mobile({ fontSize: "1.5rem" })}
`;

const Description = styled.p`
  margin: 2rem 0px;
  font-size: 1.2rem;
  font-weight: 200;
  letter-spacing: 2px;
  ${mobile({ fontSize: "0.7rem" })}
`;

const Image = styled.img`
  height: 90%;
  width: 120%;
  object-fit: cover;
`;

const Slider = () => {
  const [slideIndex, setSlidIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlidIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlidIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      {/* <Arrow direction= 'left' onClick ={()=>handleClick("left")}  >
                <ArrowLeftOutlined fontSize = 'large'/>
            </Arrow> */}
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined fontSize="large" />
      </Arrow>
    </Container>
  );
};

export default Slider;

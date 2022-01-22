import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar/Navbar";
import Announcement from "../Components/Announcement/Announcement";
import Footer from "../Components/Footer/Footer";
import { clear } from "../../src/Redux/cartRedux";
import { Add, Remove } from "@material-ui/icons";
import { mobile, tablet } from "../Responsive";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 1.4rem;
  ${mobile({ padding: "1rem" })}
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;

const TopButtom = styled.button`
  padding: 0.7rem;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background: ${(props) => (props.type === "filled" ? "blue" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  color: rgb(1, 255, 1);
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.1rem solid blue;
  border-radius: 10px;
  padding: 1.2rem;
  ${mobile({ marginTop: "2rem", width: "90%" })}
  ${tablet({ marginTop: "2rem", width: "90%" })}
`;
const SummaryTitle = styled.h3`
  font-weight: 200;
  font-size: 2rem;
  color: blue;
`;
const SummaryItem = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "1.4rem"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 5px;
  background: blue;
  font-size: 1.3rem;
  color: white;
  border: none;
  cursor: pointer;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  ${tablet({ justifyContent: "space-evenly" })}
`;

const ProductName = styled.span`
  ${tablet({ margin: "10px 0" })}
`;
const Productid = styled.div`
  ${tablet({ margin: "10px 0" })}
`;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 1.6rem;
  ${mobile({ margin: "1rem" })}
`;
const ProductPrice = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hr = styled.hr`
  background: blue;
  border: none;
  height: 1px;
`;
const Empty = styled.div`
  padding: 1.5rem;
`;

const ProductSize = styled.div``;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleClear = () => {
    setQuantity(0);
    dispatch(clear(quantity));
  };

  return (
    <Container>
      <Navbar />
      <Empty />
      <Announcement />
      <Wrapper>
        <Title>YOU BAG</Title>
        <Top>
          <TopButtom>CONTINUE SHOPPING</TopButtom>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButtom type="filled">CHECK-OUT</TopButtom>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <Productid>
                      <b>ID:</b> {product._id}
                    </Productid>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    NGN {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>NGN {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Delivery Cost</SummaryItemText>
              <SummaryItemPrice>NGN 3,500 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Delivery Cost</SummaryItemText>
              <SummaryItemPrice> - NGN 3,500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={handleClear}>BUY</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

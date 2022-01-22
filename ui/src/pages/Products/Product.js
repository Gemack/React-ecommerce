import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { Remove, Add } from "@material-ui/icons";
import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Announcement/Announcement";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";
// import product1 from "./product (1).jpg";
import { mobile, tablet, tablet2 } from "../../Responsive";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../../Request";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 3rem;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "60vh" })}
  ${tablet({ height: "70vh" })}
`;

const Title = styled.h2`
  font-weight: 200;
  font-size: 5rem;
  ${mobile({ fontSize: "2.5rem" })}
  ${tablet({ fontSize: "3rem" })}
  ${tablet2({ fontSize: "3rem" })}
`;

const Desc = styled.p`
  margin: 1.5rem 0px;
  font-size: 1.5rem;
  ${mobile({ fontSize: "1rem" })}
  ${tablet2({ fontSize: "1rem" })}
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 2.3rem;
  ${mobile({ fontSize: "1.8rem" })}
  ${tablet2({ fontSize: "1.8rem" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 3rem 0px;
  ${mobile({ width: "100%" })}
  ${tablet2({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "100%" })}
  ${tablet2({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
`;
const Amount = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 0.7rem;
  border: 2px solid blue;
  cursor: pointer;
  font-weight: 500;
  background: white;
  transition: all 1.5s;
  &:hover {
    background: blue;
    color: white;
  }
`;
const Empty = styled.div`
  padding: 1.5rem;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setproduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        console.log(res);
        setproduct(res.data);
        console.log(res);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, size }));
  };
  return (
    <Container>
      <Navbar />
      <Empty />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img}></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            blanditiis deleniti, vitae quos quaerat earum labore quae culpa
            fugit laboriosam suscipit obcaecati iusto at ducimus amet? Nobis
            doloribus sequi autem, tempora cumque, at, natus enim eligendi modi
            dolores temporibus mollitia.
          </Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>
                {product.color?.map((c) => (
                  <FilterColor color={c} key={c} />
                ))}
              </FilterTitle>
            </Filter>
            <Filter>
              <FilterTitle></FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;

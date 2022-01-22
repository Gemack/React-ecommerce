import React from "react";
import styled from "styled-components";
import Navbar from "../../src/Components/Navbar/Navbar";
import Announcement from "../../src/Components/Announcement/Announcement";
import Newsletter from "../Components/Newsletter/Newsletter";
import Products from "../Components/Product/Products";
import Footer from "../Components/Footer/Footer";
import { mobile } from "../Responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h2`
  margin: 1.2rem;
  ${mobile({ marginTop: "2rem", textAlign: "center", color: "blue" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 1.2rem;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 1.2rem;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 1.2rem;
  ${mobile({ padding: "5px", marginTop: "0.2rem" })}
`;
const Option = styled.option``;
const Empty = styled.div`
  padding: 1.5rem;
`;
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("latest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Empty />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Choose</Option>
            <Option>black</Option>
            <Option>white</Option>
            <Option>blue</Option>
            <Option>brown</Option>
            <Option>red</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="latest">Latest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;

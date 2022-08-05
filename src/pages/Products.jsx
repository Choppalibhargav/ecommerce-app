import { products } from "../backend/data";
import ProductItem from "../pages/Productitem";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: 16rem 16rem 16rem 16rem;
  grid-template-rows: auto;
  gap: 10px;
  justify-content: space-evenly;
`;

const Products = () => {
  return (
    <Container>
      {products.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";
const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap:wrap;
justify-content: space-between;
align-items: center;

`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

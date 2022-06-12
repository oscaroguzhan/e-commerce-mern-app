import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
//style components
const Container = styled.div`
    
`;
const Title = styled.h1``;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
`;
const Filter = styled.section``;
const Sort = styled.section``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
          <Filter>filter1</Filter>
          <Sort>sort1</Sort>
      </FilterContainer>
      <Categories/>
      <Products/>
      <Footer/>
    </Container>
  );
};

export default ProductList;

import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
const Container = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items:center;

`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem item={category} />
      ))}
    </Container>
  );
};

export default Categories;

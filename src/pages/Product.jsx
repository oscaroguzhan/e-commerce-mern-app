import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
  margin-left: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
`;
const ContentContainer = styled.div`
  flex: 1;
  margin-left: 10px;
  padding: 0 30px;
`;
const Title = styled.h2`
  font-weight: 400;
`;
const Desc = styled.div`
  margin-top: 20px;
  line-height: 25px;
`;
const Price = styled.div`
  font-size: 32px;
  margin-top:20px;
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  width:50%;
`;
const Filter = styled.div`
  display: flex;
  align-items:center;
  
`;
const FilterTitle = styled.span`
  font-size:20px;
  font-weight:300;
  margin-left:20px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius:50%;
  background-color:${props => props.color};
  margin-left:5px ;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 5px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  
`;
const Remove = styled.span`
  cursor: pointer;
  
`;
const Add = styled.span`
  cursor: pointer;
  
  
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius:10px;
  border: 1px solid ${props => props.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7px;
`;
const Button = styled.button`
  text-transform:uppercase;
  margin: 10px;
  padding: 15px;
  border: 2px solid ${props => props.borderColor};
  background-color:#fff;
  border-radius:7px;
  font-weight:500;
  cursor: pointer;
  &:hover {
    background-color:teal;
    color:#fff;
  }
  
`;
const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <ContentContainer>
          <Title>Single item</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            laboriosam aut illo officia. Totam odio possimus doloremque
            consectetur aliquam. Reiciendis maxime id quae ipsum eveniet commodi
            perferendi.
          </Desc>
          <Price>€ 20 </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="brown" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove >-</Remove>
              <Amount borderColor="teal">1</Amount>
              <Add >+</Add>
            </AmountContainer>
            <Button borderColor="teal">Add to cart</Button>
          </AddContainer>
        </ContentContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;

import styled from "styled-components";
import {
  FavoriteOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
const Container = styled.div`
  flex:1;
  margin: 5px;
  padding: 20px;
  min-width:280px;
  height:350px;
  background-color:#f1f1f1;
  text-align:center;
  &:hover {
        background-color:grey;
        transition: 0.5s all ease-in;
    }
`;
const Image = styled.img`
    height:75%;
`;
const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    

    
   
`;
const Icon = styled.section`
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid grey;
    border-radius:50%;
    padding: 5px;
    background-color:#fff;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;
const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

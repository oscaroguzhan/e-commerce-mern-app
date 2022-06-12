import styled from 'styled-components'
const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position:relative;
    &:hover {
      opacity: 0.6;
    }
`;
const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit:cover;
`;
const Info = styled.div`
  position:absolute;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  
`;
const Title = styled.h1`
  color:#f1f1f1;
  margin-bottom:1rem;
`;
const Button = styled.button`
  border:none;
  padding: 10px;
  border-radius:3rem;
  cursor: pointer;
  font-weight:600;
`;
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
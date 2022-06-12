import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://1.bp.blogspot.com/-BZ2D-plvMhU/Vr9w819PqdI/AAAAAAAAnM8/86bq0KE4_Rg/s1600/Zara-SS16_fashion_campaign-trends-fashion-tendencias-moda-front_row_blog-5.jpg")
      center;
  background-repeat: no-repeat;
  background-size:cover;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
    width: 50%;
    margin-left:70px;
    background-color:#fafafa;
    height: 50vh;
    border-radius:10px;
    box-shadow:1px 3px 3px black;
`;
const Title = styled.h2`
  text-align: center;
  padding: 10px 0;
  font-size: 36px;
  text-transform:uppercase;
  font-weight:300;
`;
const Form = styled.form`
  display: flex;
  flex-direction:column;
  

  
`;
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 10px;
    padding: 10px;
`;

const Button = styled.button`
    width: 35%;
    border:none;
    padding:12px;
    background-color:${props => props.color};
    margin-left:10px;
    border-radius:10px;
    font-size:16px;
    font-weight:500;
    cursor: pointer;
    &:hover {
        opacity:0.7;
        background-color:lightpink;
        transition:0.5s all ease-out;
    }
`;
const Link = styled.a`
    margin:10px 10px; 
    font-size:14px;
    &:hover {
        text-decoration:underline;
        cursor: pointer;
        
    }
`;

const LogIn = () => {
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
       
        <Input placeholder="Username" type="text"/>
        <Input placeholder="Password" type="password"/>
        <Button color="lightblue"> Log in  </Button>
        <Link>Do you remember your password?</Link>
        <Link>Create a new account?</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default LogIn
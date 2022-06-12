import styled from "styled-components";

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
    width: 60%;
    margin-left:40px;
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
  flex-wrap:wrap;
  
`;
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 20px 10px 5px 5px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 10px;
`;
const Button = styled.button`
    width: 40%;
    border:none;
    padding:15px;
    background-color:${props => props.color};
    margin-left:10px;
    border-radius:10px;
    font-size:16px;
    text-transform:uppercase;
    cursor: pointer;
    &:hover {
        opacity:0.7;
    }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="Name" type="text"/>
          <Input placeholder="Lastname" type="text"/>
          <Input placeholder="Username" type="text"/>
          <Input placeholder="E-mail" type="email"/>
          <Input placeholder="Password" type="password"/>
          <Input placeholder="Confirm Password" type="password"/>
          <Agreement>
            By creating an account, i accept that my personal data will be save
            accordingly <b>PRIVACY POLICY</b>
          </Agreement>
          <Button color="lightblue"> Submit </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

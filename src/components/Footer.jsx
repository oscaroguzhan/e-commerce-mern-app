import { Facebook, GitHub, Instagram, LinkedIn, Mail, Phone, Room } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content:space-between;
`;
const Left = styled.div`
flex:1;
flex-direction:column;
padding: 20px;
`;
const Logo = styled.h2`
    margin-bottom:10px;
`;
const Desc = styled.div`
`;


const SocialContainer = styled.div`
    margin: 25px;
    display: flex;
    
    
`;
const SocialIcon = styled.div`
    height: 40px;
    width:40px;
    border-radius:50%;
    color:#fff;
    background-color:#${props => props.color};
    display: flex;justify-content: center;
    align-items: center;
    margin:10px;

`;

const Right = styled.div`
    flex:1;
`;

const ContactContainer = styled.div`
display: flex;
flex-direction:column;
justify-content: center;

padding: 10px;
margin: 10px;


`;
const ContactItem = styled.div`
margin: 10px;`;
const Title = styled.h2`
margin-left: 10px;


`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>CodeGuruOzzy</Logo>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, nostrum adipisci nesciunt, ullam dolorum cumque ducimus officiis iste modi sunt suscipit nihil error ipsam omnis quam. Tempora veritatis dignissimos repudiandae</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="000000">
                    <GitHub/>
                </SocialIcon>
                <SocialIcon color="3B5999">
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>
      
        <Right>
        <ContactContainer>
            <Title>Contact Info</Title>
            <ContactItem>
                <Room/> Gustavlundsgatan 123
            </ContactItem>
            <ContactItem>
                <Phone/> 076 123 45 67
            </ContactItem>
            <ContactItem>
                <Mail/> codeguruozzy.com
            </ContactItem>
        </ContactContainer>
        </Right>
    </Container>
  )
}

export default Footer
import styled from 'styled-components';
const Container = styled.div`
  height:2.8rem;
  background-color:teal;
  color:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Announcement = () => {
  return (
    <Container>Super Deal! Free shipping on Orders over 100$</Container>
  )
}

export default Announcement
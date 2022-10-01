
import styled from 'styled-components'

const Container = styled.div`
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1`
color: black;
margin-bottom: 20px;

`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: wheat;
  color: #684d50;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return ( 
    <Container>
<Image src={item.img}/>
<Info>
    <Title>
        {item.title}
    </Title>
    <Button>PURCHASE NOW!</Button>
</Info>
    </Container>
  )
}

export default CategoryItem
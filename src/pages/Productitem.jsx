import { FavoriteBorderOutlined, Share } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  border-radius: 10px;
  display: grid;
  height: 420px;
  margin: 5px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  height:150px;
  object-fit: cover;
  display: flex;
`;

const Info = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

const Title = styled.div`
  color: red;
`;

const Button = styled.button`
  border-radius: 30px;
  font-size: 20px;
  font-weight: 600;
  padding: 5px;
  margin: 2px;
  color: red;
  display: flex;
  cursor: pointer;
  justify-content: center;
`;

const Price = styled.h1`
  color: red;
`;
const ProductItem = ({ item }) => {
  return (
    <Container>
      <Info>
        <Image src={item.img} />
        <Title>{item.title}</Title>
        <Price>RS: {item.price}</Price>
        <Button>
          <FavoriteBorderOutlined />
        </Button>
        <Button>
          <Share />
        </Button>
        <Button>Add to cart</Button>
      </Info>
    </Container>
  );
};

export default ProductItem;

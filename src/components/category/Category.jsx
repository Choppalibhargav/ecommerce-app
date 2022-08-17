import styled from "styled-components";
import { categories } from "";
import CategoryItem from "./Categoryitem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

import styled from "styled-components";
import { categories } from "../backend/data";
import CategoryItem from "../components/Categoryitem";

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

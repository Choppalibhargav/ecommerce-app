import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Free shipping around india</Container>;
};

export default Announcement;

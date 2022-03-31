import React from "react";
import { Container, Loader } from "./styles";

function Loading({ status }) {
  if (!status) return null;
  return (
    <>
      <Container>
        <Loader />
      </Container>
    </>
  );
}

export default Loading;

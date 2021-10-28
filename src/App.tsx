import React from "react";
import Canvas from "./Canvas";

import { Flex, Text } from "rebass";
import styled from "styled-components";

const Wrapper = styled(Flex)`
  margin: 0 auto !important;
  width: 900px;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Flex flexDirection={"column"} justifyContent={"center"}>
        <Text as={"span"} textAlign={"center"}>
          Canvas Rectangle
        </Text>
      </Flex>
      <Canvas />
    </Wrapper>
  );
};

export default App;

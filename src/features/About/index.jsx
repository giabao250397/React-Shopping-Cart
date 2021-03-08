import { Box, Heading } from "@chakra-ui/react";
import React from "react";

About.propTypes = {};

function About(props) {
  return (
    <Box>
      <Heading padding={5} textAlign="center" fontSize={50}>
        ABOUT
      </Heading>

      <Heading fontSize={20} fontWeight="normal" textAlign="center">
        This project was built for practice purposes using Context API by React.
      </Heading>
    </Box>
  );
}

export default About;

import React from "react";
import PropTypes from "prop-types";
import { Box, Heading } from "@chakra-ui/react";

Footer.propTypes = {};

function Footer(props) {
  return (
    <Box textAlign="center" padding={10}>
      <Heading>2020 © React Store</Heading>
    </Box>
  );
}

export default Footer;

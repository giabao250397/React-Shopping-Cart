import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

Header.propTypes = {};

function Header(props) {
  return (
    <Flex justify="center" margin={10}>
      <NavLink to="/">
        <Box margin={5} fontSize={25}>
          Store
        </Box>
      </NavLink>
      <NavLink to="/about">
        <Box margin={5} fontSize={25}>
          About
        </Box>
      </NavLink>
      <NavLink to="/cart">
        <Box margin={5} fontSize={25}>
          Cart
        </Box>
      </NavLink>
    </Flex>
  );
}

export default Header;

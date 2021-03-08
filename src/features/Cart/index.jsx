import React from "react";
import PropTypes from "prop-types";
import { Box, Heading } from "@chakra-ui/react";

Cart.propTypes = {};

function Cart(props) {
  return (
    <Box>
      <Heading padding={5} textAlign="center" fontSize={50}>
        CART
      </Heading>

      <Heading fontSize={20} fontWeight="normal" textAlign="center">
        This is the Cart Page.
      </Heading>
    </Box>
  );
}

export default Cart;

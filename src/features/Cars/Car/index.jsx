import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Flex } from "@chakra-ui/react";
import "./car.scss";
Car.propTypes = {
  car: PropTypes.object.isRequired,
};

function Car({ car }) {
  return (
    <Box className="car">
      <Box margin="auto">
        <img className="img" src={car.thumbnailUrl} />
      </Box>
      <Box padding={5} fontSize={25}>
        {car.name}
      </Box>
      <Box padding={5} fontSize={35} fontWeight="bold">
        {car.buy}
      </Box>
      <Flex justifyContent="flex-end" padding={10}>
        <Button fontSize={30}>View</Button>
        <Box>{car.button}</Box>
      </Flex>
    </Box>
  );
}

export default Car;

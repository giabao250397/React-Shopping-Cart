import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Car from "../Car";

CarList.propTypes = {
  carList: PropTypes.array.isRequired,
};

function CarList({ carList }) {
  return (
    <Flex justify="center" align="center" wrap="nowrap">
      <SimpleGrid columns={3} spacing={10}>
        {carList.map((car) => (
          <Box key={car.id}>
            <Car car={car} />
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default CarList;

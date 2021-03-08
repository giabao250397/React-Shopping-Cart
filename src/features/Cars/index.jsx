import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import CarList from "./CarList";

Cars.propTypes = {};

function Cars(props) {
  const carList = [
    {
      id: 1,
      name: "McLaren 720 spider 2021",
      button: (
        <Button fontSize={25} colorScheme="teal" variant="solid">
          ADD TO CART
        </Button>
      ),
      thumbnailUrl:
        "https://forgiato.com/photos/car-photos/thumbnails/mclaren/720/forgiato-custom-wheel-mclaren-720-navaja-ecx-forgiato-08-03-2020_5f2873aedcb7a_1.jpg",
      buy: "$1.200",
    },
    {
      id: 2,
      name: "Lamborgini Aventador 2021",
      button: (
        <Button fontSize={25} colorScheme="teal" variant="solid">
          ADD TO CART
        </Button>
      ),
      thumbnailUrl:
        "https://danchoioto.vn/wp-content/uploads/2019/04/lamborghini-aventador-gia-e1592792053162.jpg",
      buy: "$1.300",
    },
    {
      id: 3,
      name: "Porsche 911 2021",
      button: (
        <Button fontSize={25} colorScheme="teal" variant="solid">
          ADD TO CART
        </Button>
      ),
      thumbnailUrl:
        "https://muaxegiatot.vn/wp-content/uploads/2018/12/gia-xe-porsche-911-2019-muaxegiatot-vn-2.jpg",
      buy: "$1.150",
    },
    {
      id: 4,
      name: "Rolls Royce Phantum 2021",
      button: (
        <Button fontSize={25} colorScheme="teal" variant="solid">
          ADD TO CART
        </Button>
      ),
      thumbnailUrl:
        "https://cdn.baogiaothong.vn/upload/images/2020-1/article_img/2020-01-27/phantom-viii-ewb-8-15223160887392137099936-1580140328-width1004height565.jpg",
      buy: "$1.400",
    },
    {
      id: 5,
      name: "Vinfast President 2021",
      button: (
        <Button fontSize={25} colorScheme="teal" variant="solid">
          ADD TO CART
        </Button>
      ),
      thumbnailUrl:
        "https://danviet.mediacdn.vn/2020/9/19/screen-shot-2020-09-19-at-32318-pm-16005038242601570165998.png",
      buy: "$1.500",
    },
    {
      id: 6,
      name: "Lamborgini Urus 2021",
      button: (
        <Button fontSize={25} colorScheme="teal" variant="solid">
          ADD TO CART
        </Button>
      ),
      thumbnailUrl:
        "https://xehay.vn/uploads/images/2019/12/3/xehay-Venatus-201219-2.jpg",
      buy: "$1.4500",
    },
  ];

  return (
    <Box>
      <Heading textAlign="center" fontSize={60} padding={1}>
        Store
      </Heading>
      <Heading
        textAlign="center"
        fontSize={20}
        fontWeight="normal"
        paddingBottom={20}
      >
        This is the Store Page
      </Heading>
      <CarList carList={carList} />
    </Box>
  );
}

export default Cars;

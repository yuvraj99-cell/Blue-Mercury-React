import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleProducts = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/Products/${id}`).then((res) => {
        console.log(res.data);
      setData(res.data);

    });
  },[id]);
  return (
    <Flex>
      <Box>
        <Image src={data.ProductCard__Image_src}></Image>
      </Box>

      <Box>
        <VStack>
          <Text>{}</Text>

          <Text></Text>

          <Text></Text>
        </VStack>
      </Box>
    </Flex>
  );
};

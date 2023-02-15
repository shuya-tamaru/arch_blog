import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex w="100%" justify={"space-between"} bg={"#262B5C"} color="#fff">
        <Flex w="15%" />
        <Box
          fontWeight={800}
          textAlign={"center"}
          fontSize={"3xl"}
          lineHeight="300px"
          w="70%"
          h="300px"
        >
          footer
        </Box>
        <Flex w="15%" />
      </Flex>
    </>
  );
};

export default Footer;

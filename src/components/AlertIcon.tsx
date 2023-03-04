import { Box, Icon } from "@chakra-ui/react";
import { HiOutlineBell } from "react-icons/hi";

const AlertIcon = () => {
  return (
    <Box w="20%" textAlign={"center"}>
      <Icon
        as={HiOutlineBell}
        fontSize={"25px"}
        cursor={"pointer"}
        transition="0.5s"
        _hover={{ color: "#ff2468" }}
      />
    </Box>
  );
};

export default AlertIcon;

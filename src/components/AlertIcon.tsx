import { Icon } from "@chakra-ui/react";
import { HiOutlineBell } from "react-icons/hi";

const AlertIcon = () => {
  return (
    <Icon
      as={HiOutlineBell}
      fontSize={"25px"}
      h="100%"
      ml="15px"
      cursor={"pointer"}
      transition="0.5s"
      _hover={{ color: "#ff2468" }}
    />
  );
};

export default AlertIcon;

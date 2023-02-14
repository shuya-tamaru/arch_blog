import { Box, Center, VStack, Icon } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import CircleIcon from "./CircleIcon";

export default function SideIconsBar() {
  return (
    <VStack>
      <Box position={"sticky"} top="20px">
        <CircleIcon iconType={"like"} />
        <CircleIcon iconType={"stock"} />
        <Center mt="10px">
          <IconComponent as={BsTwitter} color={"#1da1f2"} />
        </Center>
        <Center mt="10px">
          <IconComponent as={BsFacebook} color={"#1877f2"} />
        </Center>
      </Box>
    </VStack>
  );
}

const IconComponent = ({ as, color }: { as: IconType; color: string }) => {
  return (
    <Icon
      as={as}
      fontSize="30px"
      color="#666"
      cursor={"pointer"}
      transition="transform 0.2s linear"
      _hover={{ transform: "scale(1.1)", color }}
    />
  );
};

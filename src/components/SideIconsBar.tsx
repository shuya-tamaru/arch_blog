import { Box, Center, VStack, Icon } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import CircleIcon from "./CircleIcon";

export default function SideIconsBar() {
  return (
    <VStack>
      <Box position={"sticky"} top="20px">
        <CircleIcon iconType={"like"} />
        <CircleIcon iconType={"stock"} />
        <Center mt="10px">
          <Icon
            as={BsTwitter}
            fontSize="30px"
            color="#666"
            cursor={"pointer"}
          />
        </Center>
        <Center mt="10px">
          <Icon
            as={BsFacebook}
            fontSize="30px"
            color="#666"
            cursor={"pointer"}
          />{" "}
        </Center>
      </Box>
    </VStack>
  );
}

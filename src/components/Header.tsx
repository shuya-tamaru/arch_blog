import { Box, Center, Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import AddPostButton from "./AddPostButton";
import AlertIcon from "./AlertIcon";
import SearchBar from "./SearchBar";
import TabMenu from "./TabMenu";
import UserAvator from "./UserAvator";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Flex w="100%" justify={"space-between"} bg={"#262B5C"} color="#fff">
        <Flex w="15%" />
        <Flex w="70%" h="120px">
          <VStack w="100%" h="100%">
            <Flex
              w="100%"
              h="60%"
              fontWeight={800}
              fontSize={"3xl"}
              justify={"space-between"}
            >
              <Text
                lineHeight={"72px"}
                cursor={"pointer"}
                onClick={() => {
                  router.push("/");
                }}
              >
                header
              </Text>
              <Flex>
                <SearchBar />
                <AlertIcon />
                <UserAvator />
                <AddPostButton />
              </Flex>
            </Flex>
            <TabMenu />
          </VStack>
        </Flex>
        <Flex w="15%" />
      </Flex>
    </>
  );
};

export default Header;

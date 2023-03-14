import { Box, Center, Text, Icon, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { subColor2 } from "../libs/ColorPallet";
import Tags from "./Tags";

const PostCard = () => {
  return (
    <Box position={"relative"} height="200px" w="100%">
      <Box
        shadow={"md"}
        height="100%"
        borderRadius={"5px"}
        borderColor={subColor2}
        _hover={{ textDecoration: "none" }}
      >
        <Box h="15%" p="10px" background={subColor2} color="#fff" />
        <Center h="55%" p="10px">
          <Box fontWeight={600} color="#333">
            Grasshopperを使用した複雑形状の生産設計。Pythonを用いた自動ファイル分割について。
          </Box>
        </Center>
        <Box h="15%">
          <Tags size={"xs"} iconSize={20} />
        </Box>
        <Flex h="15%" bg="red" p="10px" background={subColor2}>
          <Flex h="100%" color="#333">
            <Center>
              <Icon as={AiOutlineHeart} />
              <Text ml="3px" fontSize={"xs"} fontWeight={600}>
                100
              </Text>
            </Center>
          </Flex>
          <Flex h="100%" ml="10px" color="#333">
            <Center>
              <Icon as={BsFillBookmarkPlusFill} />
              <Text ml="3px" fontSize={"xs"} fontWeight={600}>
                100
              </Text>
            </Center>
          </Flex>
          <Flex h="100%" ml="10px" color="#fff">
            <Center>
              <Text fontSize={"xs"} fontWeight={600} ml="70px" color="#333">
                投稿日:2022-03-01
              </Text>{" "}
            </Center>
          </Flex>
        </Flex>
      </Box>
      <Link
        href={"/posts"}
        w="100%"
        height="200px"
        position="absolute"
        top={0}
      />
    </Box>
  );
};

export default PostCard;

import { Box, Center, Text, Icon, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

const PostCard = () => {
  return (
    <Link
      href="/posts"
      height="200px"
      borderRadius={"5px"}
      _hover={{ textDecoration: "none" }}
    >
      <Box h="15%" bg="red" p="10px" background="#262B5C" color="#fff" />
      <Center h="70%" p="10px" border="3px solid #262B5C ">
        <Box fontWeight={600}>
          Grasshopperを使用した複雑形状の生産設計。Pythonを用いた自動ファイル分割について。
        </Box>
      </Center>
      <Flex h="15%" bg="red" p="10px" background="#262B5C">
        <Flex h="100%" color="#fff">
          <Center>
            <Icon as={AiOutlineHeart} />
            <Text ml="3px" fontSize={"xs"} fontWeight={600}>
              100
            </Text>
          </Center>
        </Flex>
        <Flex h="100%" ml="10px" color="#fff">
          <Center>
            <Icon as={BsFillBookmarkPlusFill} />
            <Text ml="3px" fontSize={"xs"} fontWeight={600}>
              100
            </Text>
          </Center>
        </Flex>
        <Flex h="100%" ml="10px" color="#fff">
          <Center>
            <Text fontSize={"xs"} fontWeight={600} ml="70px">
              投稿日:2022-03-01
            </Text>{" "}
          </Center>
        </Flex>
      </Flex>
    </Link>
  );
};

export default PostCard;

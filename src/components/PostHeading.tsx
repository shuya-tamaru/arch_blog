import {
  Avatar,
  Center,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function PostHeading() {
  return (
    <>
      <VStack spacing={1} w="100%" color="#666">
        <Text w="100%" fontSize="sm" fontWeight={"600"}>
          投稿日: 2022 / 01 / 01
        </Text>
        <Text w="100%" fontSize="sm" fontWeight={"600"}>
          更新日: 2023 / 01 / 01
        </Text>
      </VStack>
      <Heading>
        【建設業界向けの技術ブログ投稿サイト建設業界向けの技術ブログ投稿サイト】
      </Heading>
    </>
  );
}

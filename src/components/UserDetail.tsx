import {
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import { RiEarthFill } from "react-icons/ri";

const UserDetail = () => {
  return (
    <>
      <Center>
        <Avatar size="xl" />
      </Center>
      <Center pt="10px">
        <Text color="#444" fontWeight={600} fontSize={"xl"}>
          User Name
        </Text>
      </Center>
      <Flex py="10px" borderBottom={"1px solid #999 "} justify="center">
        <Icon
          as={BsTwitter}
          ml="10px"
          boxSize={6}
          cursor="pointer"
          color="#00acee"
        />
        <Icon
          as={BsYoutube}
          ml="10px"
          boxSize={6}
          cursor="pointer"
          color="#c4302b"
        />
        <Icon
          as={BsGithub}
          ml="10px"
          boxSize={6}
          cursor="pointer"
          color="#333"
        />
        <Icon
          as={AiFillInstagram}
          ml="10px"
          boxSize={6}
          borderRadius="10px"
          cursor="pointer"
          color="#fff"
          bgGradient="radial-gradient(
                      circle at 30% 107%,
                      #fdf497 0%,
                      #fdf497 5%,
                      #fd5949 45%,
                      #d6249f 60%,
                      #285aeb 90%
                    )"
        />
        <Icon
          as={BsFacebook}
          ml="10px"
          boxSize={6}
          cursor="pointer"
          color="#1877f2"
        />
        <Icon
          as={RiEarthFill}
          ml="10px"
          boxSize={6}
          cursor="pointer"
          color="#666"
        />
      </Flex>
      <Center w="100%" py="10px" borderBottom={"1px solid #999 "}>
        <Box
          w="100%"
          color="#444"
          fontWeight={600}
          fontSize={"sm"}
          overflowWrap="break-word"
        >
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptionde
        </Box>
      </Center>
      <Center>
        <Flex justify={"space-between"} w="70%" mt="10px">
          <Box w="60px">
            <Text textAlign={"center"} fontSize={"xs"} fontWeight={600}>
              投稿数
            </Text>
            <Text textAlign={"center"} fontSize={"xs"} fontWeight={600}>
              100
            </Text>
          </Box>
          <Box w="60px">
            <Text textAlign={"center"} fontSize={"xs"} fontWeight={600}>
              フォロー
            </Text>
            <Text textAlign={"center"} fontSize={"xs"} fontWeight={600}>
              100
            </Text>
          </Box>
          <Box w="60px">
            <Text textAlign={"center"} fontSize={"xs"} fontWeight={600}>
              フォロワー
            </Text>
            <Text textAlign={"center"} fontSize={"xs"} fontWeight={600}>
              100
            </Text>
          </Box>
        </Flex>
      </Center>
      <Center mt="20px">
        <Button w="100%" color="#666">
          フォローする
        </Button>
        {/* <Button w="100%" color="#666">
                    ユーザー情報を編集する
                  </Button> */}
      </Center>
    </>
  );
};

export default UserDetail;
